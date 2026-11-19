// Graph Studio — what a lesson page imports
//
//   import { GraphPicture, GraphPictureLive, GraphSliders, GraphTry, GraphSteps } from '@/app/components/graph-studio/lesson';
//   import { scenePicture, sceneSteps } from '@/app/components/graph-studio/lesson-build';   // in getStaticProps only
//
// This entry is deliberately small. A lesson page that takes its
// figures from here does not download the graph engine; the engine
// arrives only when a reader wakes a live picture. Do not import lesson
// figures from the main entry (index.js): that one brings everything.

export { default as GraphPicture } from './shells/embeds/GraphPicture.jsx';
export { default as GraphPictureLive } from './shells/embeds/GraphPictureLive.jsx';
export { default as GraphSliders } from './shells/embeds/GraphSliders.jsx';
export { default as GraphTry } from './shells/embeds/GraphTry.jsx';
export { default as GraphSteps } from './shells/embeds/GraphSteps.jsx';
