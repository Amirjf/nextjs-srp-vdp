export const arraysEqual = (
  a1: string[] | number[],
  a2: string[] | number[]
) => {
  /* WARNING: arrays must not contain {objects} or behavior may be undefined */
  return JSON.stringify(a1) == JSON.stringify(a2);
};
