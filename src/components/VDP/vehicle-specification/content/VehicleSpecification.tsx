import { useParams } from 'react-router-dom';
import useVehicle from '../../../../hooks/useVehicle';
import Accordion from '../../../common/accordion/content/Accordion';
import {
  ContentContainer,
  ContentItem,
  Heading,
  SubContent,
} from '../styles/vehicleSpecification.styles';

const VehicleSpecification = () => {
  const { id } = useParams();
  const { data } = useVehicle(id);

  const {
    features: { Features },
  } = data;

  const renderUpdatedSpecs = () => {
    return Object.entries(Features)?.map(([key, value]: any, idx: number) => {
      return (
        <Accordion key={`${idx}-${value}`} title={key}>
          <ContentContainer>
            {Object.entries(value).map(([key, value]: any, idx: number) => {
              return (
                <ContentItem key={`${idx}-${value}`}>
                  <Heading>{key}</Heading>
                  <ul>
                    {value.map((value: string, idx: number) => (
                      <SubContent key={`${idx}-${value}`}>{value}</SubContent>
                    ))}
                  </ul>
                </ContentItem>
              );
            })}
          </ContentContainer>
        </Accordion>
      );
    });
  };

  const renderOlderSpecs = () => {
    return (
      <Accordion title="Features">
        <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: 14 }}>
          {Features?.map((feature: string, idx: number) => (
            <div key={`${idx}-${feature}`} style={{ width: '50%' }}>
              {feature}
            </div>
          ))}
        </div>
      </Accordion>
    );
  };

  return (
    <div>
      <h2 style={{ fontWeight: '600', marginBlock: 20 }}></h2>
      <br />
      {Features
        ? typeof Features[0] === 'string'
          ? renderOlderSpecs()
          : renderUpdatedSpecs()
        : null}
    </div>
  );
};

export default VehicleSpecification;
