import { FiHelpCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import useVehicle from '../../../../hooks/useVehicle';
import { Button, Divider } from '../../../common';
import { Space } from '../../../common/space';
import { VehiclePrice, VehicleTitle } from '../styles/vehicleInfo.styles';
import { motion } from 'framer-motion';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import { useContext } from 'react';
import { currencyFormat } from '../../../common/card/utils/utils';
import { handleShowingTextWithTradeMark } from '../../../../global/utils/utils';
const VehicleBaseInfo = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);
  const { setPageAction }: any = useContext(VdpContext);

  const { year, make, model, body, pricing, drive_train } = data;

  return (
    <motion.div>
      <Space
        style={{ paddingInline: '1rem', paddingTop: 20 }}
        align="space-between"
      >
        <VehicleTitle
          as={motion.h1}
          dangerouslySetInnerHTML={{
            __html: handleShowingTextWithTradeMark(
              `${year} ${make} ${model} <br /> <span>${drive_train} ${body}</span>`
            ),
          }}
        ></VehicleTitle>
        <Space direction="vertical">
          <VehiclePrice>
            {' '}
            {isNaN(Number(pricing)) ? pricing : currencyFormat(Number(pricing))}
          </VehiclePrice>
          <span
            style={{ display: 'flex', justifyContent: 'start' }}
            onClick={() => setPageAction('Price Details')}
          >
            <Button variant="text" scale="sm" icon={<FiHelpCircle />}>
              Price Details
            </Button>
          </span>
        </Space>
      </Space>
      <Divider
        style={{ borderWidth: 3, width: '40%' }}
        align="left"
        color="var(--mainColor)"
      />
    </motion.div>
  );
};

export default VehicleBaseInfo;
