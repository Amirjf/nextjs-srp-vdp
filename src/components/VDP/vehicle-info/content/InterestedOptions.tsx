import { useContext } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import useVehicle from '../../../../hooks/useVehicle';
import { Button } from '../../../common';
import { OptionsContainer } from '../styles/vehicleInfo.styles';

const InterestedOptions = () => {
  const { setPageAction }: any = useContext(VdpContext);
  const params = useParams();
  const { data } = useVehicle(params.id);

  const { buttons, vin } = data;

  return (
    <OptionsContainer>
      <Button
        onClick={() => setPageAction('Schedule Test Drive')}
        align="space-between"
        direction="row"
        icon={<FiChevronDown />}
      >
        Schedule Test Drive
      </Button>
      <Button
        onClick={() => setPageAction('Confirm Availability')}
        align="space-between"
        direction="row"
        icon={<FiChevronDown />}
      >
        Confirm Availability
      </Button>
      {buttons && (
        <span
          className="vdp-btns-container"
          dangerouslySetInnerHTML={{ __html: buttons }}
        ></span>
      )}

      <a
        href={`https://express.spokanemercedes.com/express/${vin}`}
        className="roadster-btn"
      >
        <Button
          align="space-between"
          direction="row"
          icon={<FiChevronRight />}
          block
        >
          SEE PAYMENT OPTIONS
        </Button>
      </a>
    </OptionsContainer>
  );
};

export default InterestedOptions;
