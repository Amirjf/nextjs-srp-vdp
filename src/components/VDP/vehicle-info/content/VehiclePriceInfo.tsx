import { useParams } from 'react-router-dom';
import useVehicle from '../../../../hooks/useVehicle';

const VehiclePriceInfo = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);

  const { pricing_html } = data;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pricing_html }}></div>
    </>
  );
};

export default VehiclePriceInfo;
