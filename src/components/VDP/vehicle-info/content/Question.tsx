import { useContext } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaUserCheck } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import useVehicle from '../../../../hooks/useVehicle';
import { Button } from '../../../common';

const Question = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);
  const { dealer_phone } = data;
  const { text, url } = dealer_phone;

  const { setPageAction }: any = useContext(VdpContext);

  return (
    <div>
      <a href={url}>
        <Button
          style={{
            fontFamily: 'Arial',
            backgroundColor: '#ECF0F5',
            color: '#595050',
            border: 'none',
            height: 50,
            fontSize: 18,
            borderRadius: 6,
            cursor: 'pointerq',
          }}
          direction="row"
          align="space-between"
          block
          scale="lg"
        >
          <span
            style={{ paddingRight: 20, display: 'flex', alignItems: 'center' }}
          >
            <BsTelephoneFill />
          </span>
          {text}
        </Button>
      </a>
      <br />
      <br />
      <Button
        onClick={() => setPageAction('Confirm Availability')}
        style={{
          fontFamily: 'Arial',
          backgroundColor: '#ECF0F5',
          color: '#595050',
          border: 'none',
          height: 50,
          fontSize: 18,
          borderRadius: 6,
          cursor: 'pointerq',
        }}
        direction="row"
        align="space-between"
        block
        scale="lg"
      >
        <span
          style={{ paddingRight: 20, display: 'flex', alignItems: 'center' }}
        >
          <FaUserCheck />
        </span>
        Confirm Availability
      </Button>
    </div>
  );
};

export default Question;
