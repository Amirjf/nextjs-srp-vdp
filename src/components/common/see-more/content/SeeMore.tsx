import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

type Props = {
  isSeeMore: boolean;
  setIsSeeMore: any;
};

const SeeMore: React.FC<Props> = ({ isSeeMore, setIsSeeMore }: Props) => {
  return (
    <div style={{ paddingTop: 5 }}>
      {isSeeMore ? (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: 5,
            cursor: 'pointer',
          }}
          onClick={() => setIsSeeMore(!isSeeMore)}
        >
          <BiMinus />
          See Less
        </span>
      ) : (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: 5,
            cursor: 'pointer',
          }}
          onClick={() => setIsSeeMore(!isSeeMore)}
        >
          <BiPlus />
          See More
        </span>
      )}
    </div>
  );
};

export default SeeMore;
