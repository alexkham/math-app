// appliedSections.jsx
// Section list for an applied leaf:
// Recognize · Set it up (+ hand-off + interpretation) · Worked examples · Visual · Pitfalls · Related

import React from 'react';
import RecognizeBox from './RecognizeBox';
import ProblemSetup from './ProblemSetup';
import WorkedExamples from './WorkedExamples';
import VisualWalkthrough from './VisualWalkthrough';
import PitfallsList from './PitfallsList';
import RelatedMethods from './RelatedMethods';
import { handoffRef, relatedItems } from './resolveMethodRefs';

export default function appliedSections(context) {
  const { page, hub, components } = context;
  const titles = page.titles || {};
  const sections = [];

  if (page.recognize) {
    sections.push({
      id: 'recognize',
      title: titles.recognize || 'Recognize the problem',
      node: <RecognizeBox text={page.recognize} note={page.recognizeNote} />,
    });
  }

  if (page.setup && page.setup.length) {
    sections.push({
      id: 'setup',
      title: titles.setup || 'Set it up',
      node: (
        <ProblemSetup
          setup={page.setup}
          handoff={handoffRef(hub, page.handoff)}
          interpretation={page.interpretation}
        />
      ),
    });
  }

  if (page.examples && page.examples.length) {
    sections.push({
      id: 'examples',
      title: titles.examples || 'Worked examples',
      node: <WorkedExamples examples={page.examples} after={page.examplesAfter} />,
    });
  }

  if (page.visual) {
    sections.push({
      id: 'visual',
      title: titles.visual || 'See it happen',
      node: <VisualWalkthrough visual={page.visual} components={components} />,
    });
  }

  if (page.pitfalls && page.pitfalls.length) {
    sections.push({
      id: 'pitfalls',
      title: titles.pitfalls || 'Common mistakes',
      node: <PitfallsList items={page.pitfalls} />,
    });
  }

  if (page.related && page.related.length) {
    sections.push({
      id: 'related',
      title: titles.related || 'Related methods',
      node: <RelatedMethods items={relatedItems(hub, page.related)} />,
      inToc: false,
    });
  }

  return sections;
}
