import { useParams } from "react-router-dom";
import useVehicle from "../../../../hooks/useVehicle";
import { Typography } from "../../../common";

const DealerLocation = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);

  const {
    dealer_city,
    dealer_street,
    dealer_state,
    dealer_postal_code,
    dealer_hours,
  } = data;
  return (
    <div>
      <Typography strong variant="h5">
        Address :
      </Typography>
      <div>
        {dealer_street} , {dealer_city} , {dealer_state}, {dealer_postal_code}
      </div>
      <br />

      <Typography strong variant="h5">
        Hours :
      </Typography>
      {dealer_hours.map((hour: any, idx: number) => (
        <div key={idx}>
          <span style={{ fontWeight: 500 }}>{hour?.department}</span> :{" "}
          {hour?.status}
        </div>
      ))}
    </div>
  );
};

export default DealerLocation;
