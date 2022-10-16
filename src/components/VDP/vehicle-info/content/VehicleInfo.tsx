import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import ConfirmAvailability from '../../confirm-availability/ConfirmAvailability';
import ScheduleTestDriveForm from '../../schedul-test-drive/ScheduleTestDriveForm';
import Slider from '../../slider/content/Slider';
import { VehicleInfoContainer } from '../styles/vehicleInfo.styles';
import DealerLocation from './DealerLocation';
import GoBackButton from './GoBackButton';
import InterestedOptions from './InterestedOptions';
import Question from './Question';
import VehicleBaseInfo from './VehicleBaseInfo';
import VehiclePriceInfo from './VehiclePriceInfo';
import VehicleSummary from './VehicleSummary';

export const ACTIONS: any = {
  baseInfo: <VehicleSummary />,
  'Choose an Option': <InterestedOptions />,
  'Questions?': <Question />,
  'Located at': <DealerLocation />,
  'Price Details': <VehiclePriceInfo />,
  'Schedule Test Drive': <ScheduleTestDriveForm />,
  'Confirm Availability': <ConfirmAvailability />,
};
const VehicleInfo = () => {
  const { infoAction, isShowingStickyGallery }: any = useContext(VdpContext);

  return (
    <LayoutGroup>
      <VehicleInfoContainer
        as={motion.div}
        layout="size"
        transition={{ duration: 0.1 }}
      >
        <AnimatePresence>
          {isShowingStickyGallery && (
            <motion.div
              key="slider"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              style={{ padding: '20px 20px 0 20px' }}
              transition={{ duration: 0.1 }}
            >
              <Slider />
            </motion.div>
          )}
        </AnimatePresence>

        <VehicleBaseInfo />

        <motion.div
          style={{
            paddingInline: '1rem',
          }}
        >
          {infoAction !== 'baseInfo' && <GoBackButton />}

          {ACTIONS[infoAction]}
        </motion.div>
      </VehicleInfoContainer>
    </LayoutGroup>
  );
};

export default VehicleInfo;
