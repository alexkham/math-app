// ===========================================================
// buildScenes.js
// proof definition → scenes, the same shape the ScenePlayer
// tools use:
//   { phase, title, formula, canvas: { show, hl } }
// explanations (optional): { [phase]: rawHtml }, appended to the
// formula of every scene with that phase (Line 1 anchor mesh).
// ===========================================================

export default function buildScenes(proof, explanations = null) {
  return proof.steps.map((st) => {
    const extra = explanations && explanations[st.phase] ? explanations[st.phase] : '';
    const just = st.just ? `<span class="pp-just">${st.just}</span><br/>` : '';
    return {
      phase: st.phase,
      title: st.title,
      formula: `${just}${st.formula || ''}${extra}`,
      canvas: { show: st.show || [], hl: st.hl || [] }
    };
  });
}
