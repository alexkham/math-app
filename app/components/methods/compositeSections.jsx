// compositeSections.jsx
// Section list for a composite leaf:
// Recognize · Methods · Steps · Worked examples · Visual · Pitfalls · Related

import React from 'react';
import RecognizeBox from './RecognizeBox';
import MethodAlternatives from './MethodAlternatives';
import MethodSteps from './MethodSteps';
import WorkedExamples from './WorkedExamples';
import VisualWalkthrough from './VisualWalkthrough';
import PitfallsList from './PitfallsList';
import RelatedMethods from './RelatedMethods';
import { atomicRef, relatedItems } from './resolveMethodRefs';

export default function compositeSections(context) {
  const { page, hub, components } = context;
  const titles = page.titles || {};
  const sections = [];

  if (page.recognize) {
    sections.push({
      id: 'recognize',
      title: titles.recognize || 'Recognize the task',
      node: <RecognizeBox text={page.recognize} note={page.recognizeNote} />,
    });
  }

  if (page.methods && page.methods.length) {
    sections.push({
      id: 'methods',
      title: titles.methods || (page.methods.length === 2 ? 'Two ways to do it' : 'Ways to do it'),
      node: <MethodAlternatives methods={page.methods} />,
    });
  }

  if (page.steps && page.steps.items && page.steps.items.length) {
    const steps = page.steps.items.map((step) => ({ ...step, atomic: atomicRef(hub, step.atomic) }));
    sections.push({
      id: 'steps',
      title: titles.steps || 'Steps',
      node: <MethodSteps steps={steps} traceLabel={page.steps.traceLabel} />,
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
