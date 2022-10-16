export function range(start: number, end: number, step = 1) {
  const len = Math.floor((end - start) / step) + 1;
  return (
    Array(len)
      //@ts-ignore
      .fill()
      .map((_, idx) => start + idx * step)
  );
}
export const handleShowingTextWithTradeMark = (term: string) => {
  let fillTitle = term;
  if (fillTitle.includes('4MATIC')) {
    fillTitle = fillTitle.replace('4MATIC', '4MATIC&#174;');
  }

  return fillTitle;
};

export const translateWordpressHtml = (htmlStr: string) => {
  htmlStr = htmlStr.replace(/&lt;/g, '<');
  htmlStr = htmlStr.replace(/&gt;/g, '>');
  htmlStr = htmlStr.replace(/&quot;/g, '"');
  htmlStr = htmlStr.replace(/&#39;/g, "'");
  htmlStr = htmlStr.replace(/&amp;/g, '&');
  return htmlStr;
};
