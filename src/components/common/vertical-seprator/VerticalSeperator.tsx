type Props = {
  height?: string | number;
};
const VerticalSeperator = ({ height }: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        display: 'inline-block',
        height: height || '2.5em',
        verticalAlign: 'middle',
        borderTop: '0',
        borderLeft: '3px solid rgba(229, 229, 229, 1)',
        borderRadius: 2,
      }}
    />
  );
};

export default VerticalSeperator;
