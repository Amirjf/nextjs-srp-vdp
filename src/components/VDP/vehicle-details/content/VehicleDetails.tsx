import { useState } from 'react';
import { FiChevronRight, FiChevronUp } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { handleShowingTextWithTradeMark } from '../../../../global/utils/utils';
import useVehicle from '../../../../hooks/useVehicle';
import { Button } from '../../../common';

const VehicleDetails = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);

  const [showMore, setShowMore] = useState(false);
  const { description } = data;

  const normalizeDesc = handleShowingTextWithTradeMark(description);
  return (
    <div style={{ marginBlock: 20 }}>
      <br />
      <h2
        style={{
          fontSize: 19,
          color: 'rgba(28, 31, 60, 1)',
          paddingBottom: '1rem',
          fontWeight: '600',
        }}
      >
        Details
      </h2>

      <p
        style={{
          color: 'rgba(88, 86, 86, 1)',
          textAlign: 'justify',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontSize: 15,
          lineHeight: '25px',
          letterSpacing: '0.15px',
        }}
        dangerouslySetInnerHTML={{
          __html: normalizeDesc.slice(
            0,
            !showMore ? 442 : normalizeDesc.length
          ),
        }}
      ></p>

      <Button
        variant="text"
        style={{ padding: 0, color: '#2B54E7' }}
        onClick={() => setShowMore(!showMore)}
      >
        {!showMore ? 'Show more' : 'Show less'}
        {!showMore ? <FiChevronRight size={20} /> : <FiChevronUp size={20} />}
      </Button>
    </div>
  );
};

export default VehicleDetails;
