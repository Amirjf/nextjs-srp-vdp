const calculateWidth = (num: number) =>
  num
    ? `
flex: 0 0 ${(num * 100) / 12}%;
max-width: ${(num * 100) / 12}%;
`
    : '';

const calculateColPadding = (value: number) => {
  return `
  padding-left:${value}px;
  padding-right:${value}px;
  padding-top:${value}px;
  `;
};
const calculateRowMargin = (value: number) => {
  return ` 
  margin-right: -${value}px;
  margin-left: -${value}px;
  `;
};

export { calculateWidth, calculateColPadding, calculateRowMargin };
