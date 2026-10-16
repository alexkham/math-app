// Affiliate course catalogue, read from the registry at
// app/api/db/repositories/affiliates/courses.json. Add or pause courses there, not here.
//
//   COURSES.trigonometry  → props for <AffiliateBlock {...COURSES.trigonometry} />
//   activeCourses()       → the active registry records (full fields)

import registry from '@/app/api/db/repositories/affiliates/courses.json';

const PROP_FIELDS = ['provider', 'title', 'description', 'href', 'rating', 'reviews', 'hours', 'instructor'];

export function activeCourses() {
  return (registry.courses || []).filter((course) => course.status === 'active');
}

function toProps(course) {
  const props = {};
  PROP_FIELDS.forEach((field) => {
    if (course[field] !== undefined) props[field] = course[field];
  });
  return props;
}

export const COURSES = Object.fromEntries(activeCourses().map((course) => [course.key, toProps(course)]));
