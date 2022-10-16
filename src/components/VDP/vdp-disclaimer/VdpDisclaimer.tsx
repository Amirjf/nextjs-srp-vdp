import { useParams } from 'react-router-dom';
import { translateWordpressHtml } from '../../../global/utils/utils';

import useVehicle from '../../../hooks/useVehicle';
import { RecommendedVehiclesContainer } from '../recommended-vehicles/styles/recommendedVehicles.styles';

const VdpDisclaimer = () => {
  const { id } = useParams();
  const { data } = useVehicle(id);

  const { vdp_disclaimer, cond } = data;
  if (vdp_disclaimer[cond].length > 0) {
    return (
      <RecommendedVehiclesContainer>
        <br />
        <h2 style={{ fontSize: 12, color: 'rgba(28, 31, 60, 1)' }}>
          Disclaimer
        </h2>
        <br />
        <section
          style={{ fontSize: 11 }}
          dangerouslySetInnerHTML={{
            __html: translateWordpressHtml(vdp_disclaimer[cond]),
          }}
        ></section>
      </RecommendedVehiclesContainer>
    );
  } else {
    return null;
  }
};

export default VdpDisclaimer;
