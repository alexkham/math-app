// Which course fits an Ask AI answer. Reads paths and keywords from the registry
// (app/api/db/repositories/affiliates/courses.json). No React.
//
//   courseKeyForPath('/probability/visual-tools/variance')   → 'probability'
//   courseForSources(sources, page, question)                 → { key, topic, ...props } | null
//       sources: the answer's source pages ({ url }). Majority vote over their paths:
//       the winning course must hold at least two sources (all of them when there are
//       fewer than three). A tie is broken by keywords in the question, else no card.
//       No sources at all: fall back to the page the question was asked from.
//   isCourseIntent('where should I start learning this?')     → true

import { activeCourses, COURSES } from './courses';

const INTENT = /\b(learn|learning|study|studying|course|courses|practice|practise|exam|exams|tutorial|lessons?|where (do|should|can) i (start|begin)|how (do|can) i (start|get better|improve))\b/i;

function cleanPath(value) {
  let path = String(value || '').split('#')[0].split('?')[0];
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path;
}

function askAiCourses() {
  return activeCourses().filter((course) => (course.placements || []).includes('askai'));
}

function pathMatches(path, prefix) {
  return path === prefix || path.startsWith(`${prefix}/`);
}

export function courseKeyForPath(path) {
  const clean = cleanPath(path);
  if (!clean.startsWith('/')) return null;
  const course = askAiCourses().find((c) => (c.paths || []).some((prefix) => pathMatches(clean, prefix)));
  return course ? course.key : null;
}

function keywordHits(course, question) {
  const text = String(question || '').toLowerCase();
  return (course.keywords || []).filter((word) => text.includes(word.toLowerCase())).length;
}

function result(key) {
  const course = askAiCourses().find((c) => c.key === key);
  if (!course || !COURSES[key]) return null;
  return { key, topic: (course.topics && course.topics[0]) || key, ...COURSES[key] };
}

export function courseForSources(sources, page, question = '') {
  const paths = Array.isArray(sources) ? sources.map((s) => s && s.url).filter(Boolean) : [];

  if (!paths.length) return page ? result(courseKeyForPath(page)) : null;

  const votes = {};
  paths.forEach((path) => {
    const key = courseKeyForPath(path);
    if (key) votes[key] = (votes[key] || 0) + 1;
  });
  const ranked = Object.entries(votes).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return null;

  const [topKey, topCount] = ranked[0];
  const needed = paths.length < 3 ? paths.length : 2;
  if (topCount < needed) return null;

  const tied = ranked.filter(([, count]) => count === topCount).map(([key]) => key);
  if (tied.length === 1) return result(topKey);

  const byKeywords = tied
    .map((key) => [key, keywordHits(askAiCourses().find((c) => c.key === key), question)])
    .sort((a, b) => b[1] - a[1]);
  if (byKeywords[0][1] > 0 && byKeywords[0][1] !== (byKeywords[1] || [null, 0])[1]) return result(byKeywords[0][0]);
  return null;
}

export function isCourseIntent(question) {
  return INTENT.test(String(question || ''));
}
