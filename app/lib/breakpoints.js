export const breakpoints = {
  sm: 360,
  md: 640,
  tablet: 768,
  lg: 1024,
  xl: 1280,
};

export const mediaQuery = {
  smUp: `(min-width: ${breakpoints.sm}px)`,
  mdUp: `(min-width: ${breakpoints.md}px)`,
  tabletUp: `(min-width: ${breakpoints.tablet}px)`,
  lgUp: `(min-width: ${breakpoints.lg}px)`,
  xlUp: `(min-width: ${breakpoints.xl}px)`,

  smDown: `(max-width: ${breakpoints.sm - 1}px)`,
  mdDown: `(max-width: ${breakpoints.md - 1}px)`,
  tabletDown: `(max-width: ${breakpoints.tablet - 1}px)`,
  lgDown: `(max-width: ${breakpoints.lg - 1}px)`,
  xlDown: `(max-width: ${breakpoints.xl - 1}px)`,
};
