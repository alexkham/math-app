// strategySections.jsx
// Section list for a strategy leaf:
// Recognize (optional) · Decision tree (+ written-out list) · Examples (optional) · Pitfalls (optional) · Related

import React from 'react';
import RecognizeBox from './RecognizeBox';
import StrategyTree from './StrategyTree';
import WorkedExamples from './WorkedExamples';
import PitfallsList from './PitfallsList';
import RelatedMethods from './RelatedMethods';
import { itemHref, findItem, relatedItems } from './resolveMethodRefs';

function resolveTreeLinks(tree, hub) {
  const resolved = {};
  Object.entries(tree).forEach(([id, node]) => {
    if (node.type === 'leaf' && node.to) {
      const target = findItem(hub, node.to);
      resolved[id] = {
        ...node,
        name: node.name || (target ? target.name : node.to),
        href: target ? itemHref(hub, target) || undefined : undefined,
      };
    } else {
      resolved[id] = node;
    }
  });
  return resolved;
}

export default function strategySections(context) {
  const { page, hub } = context;
  const titles = page.titles || {};
  const sections = [];

  if (page.recognize) {
    sections.push({
      id: 'recognize',
      title: titles.recognize || 'When to use this',
      node: <RecognizeBox text={page.recognize} note={page.recognizeNote} />,
    });
  }

  if (page.tree) {
    sections.push({
      id: 'decision-tree',
      title: titles.tree || 'Decision tree',
      node: (
        <StrategyTree
          tree={resolveTreeLinks(page.tree.nodes, hub)}
          rootId={page.tree.rootId}
          branches={page.tree.branches}
          svgW={page.tree.svgW}
          ariaLabel={page.h1}
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
