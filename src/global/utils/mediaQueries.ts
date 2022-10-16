export const breakpoints = {
  xs: 375,
  sm: 560,
  md: 768,
  lgTab: 1024,
  lg: 1280,
  xl: 1440,
  xxl: 1700,
  xxxl: 2300,
};

export const mediaQueries = (key: keyof typeof breakpoints) =>
  `@media only screen and (min-width: ${breakpoints[key]}px)`;
