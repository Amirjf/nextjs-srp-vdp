import React, { Fragment, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useIntersectionObserver } from 'usehooks-ts';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import { handleShowingTextWithTradeMark } from '../../../../global/utils/utils';
import useVehicle from '../../../../hooks/useVehicle';
import { Space } from '../../../common/space';
import { InfoContainer, MoreInfoVal } from '../styles/vehicleMoreInfo.styles';

const VehicleMoreInfo = () => {
  const params = useParams();
  const { data } = useVehicle(params.id);
  const { setIsVisible }: any = useContext(VdpContext);

  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  React.useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible]);

  const {
    trim,
    transmission,
    mileage,
    make,
    int_color,
    ext_color,
    fuel_type,
    engine,
    drive_train,
    body,
    doors,
    year,
    model,
  } = data;

  const normalizeData = [
    { heading: 'Body', content: body },
    { heading: 'Make', content: make },
    { heading: 'Model', content: model },
    { heading: 'Trim', content: trim },
    { heading: 'Year', content: year },
    { heading: 'Engine', content: engine },
    { heading: 'Transmission', content: transmission },
    { heading: 'Mileage', content: mileage },
    { heading: 'Interor color', content: int_color },
    { heading: 'Color', content: ext_color },
    { heading: 'Fuel', content: fuel_type },
    { heading: 'Drive train', content: drive_train },
    { heading: 'Doors', content: doors },
  ];

  return (
    <div>
      <br />
      <h2
        style={{
          fontSize: 19,
          color: 'rgba(28, 31, 60, 1)',
          fontWeight: '600',
        }}
      >
        More Car Info
      </h2>
      <br />

      <InfoContainer align="start" wrap>
        {normalizeData.map((info: any, idx: number) => (
          <Fragment key={`${idx}`}>
            <Space style={{ columnGap: 10 }}>
              <span>{info.heading}</span>
              <MoreInfoVal
                dangerouslySetInnerHTML={{
                  __html: handleShowingTextWithTradeMark(
                    info.content.toString()
                  ),
                }}
              ></MoreInfoVal>
            </Space>
          </Fragment>
        ))}
      </InfoContainer>
      <div
        ref={ref}
        style={{
          top: '50%',
          width: '2px',
          position: 'absolute',
          height: '100px',
        }}
      ></div>
    </div>
  );
};

export default VehicleMoreInfo;
