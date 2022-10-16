export const formatString = (string: string) => {
  let temp = string;
  temp = temp.replace(/\s+/g, '');
  return temp;
};
