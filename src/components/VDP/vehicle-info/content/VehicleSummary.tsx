import { useContext, useRef, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { VdpContext } from '../../../../context/vdp/VdpContext';
import useVehicle from '../../../../hooks/useVehicle';
import { Button } from '../../../common';
import { kFormatter } from '../../../common/badge/content/Badge';
import { Space } from '../../../common/space';
import Tooltip from '../../../common/tooltip/content/Tooltip';
import {
  VehicleSummaryInfo,
  CopyableText,
  CopyIcon,
} from '../styles/vehicleInfo.styles';
import VehicleActions from './VehicleActions';

const VehicleSummary = () => {
  const vinCopyRef: any = useRef<undefined | null | HTMLParagraphElement>();
  const stockCopyRef: any = useRef<undefined | null | HTMLParagraphElement>();
  const [isVinCopied, setIsVinCopied] = useState(false);
  const [isStockCopied, setIsStockCopied] = useState(false);
  const { palette } = useTheme();
  const { setPageAction }: any = useContext(VdpContext);
  const params = useParams();
  const { data } = useVehicle(params.id);

  const handleCopy = () => {
    navigator.clipboard.writeText(vinCopyRef.current.innerText);
    setIsVinCopied(true);
  };
  const handleCopyStock = () => {
    navigator.clipboard.writeText(stockCopyRef.current.innerText);
    setIsStockCopied(true);
  };

  const { mileage, vin, stock_number, cond, dealer_name, certified_logos } =
    data;

  return (
    <div>
      <VehicleSummaryInfo>
        <Space style={{ paddingBottom: 10 }} align="space-between">
          <div>Mileage</div>
          <div style={{ fontWeight: 600 }}>{kFormatter(mileage)} miles</div>
        </Space>
        <Space style={{ paddingBottom: 10 }} align="space-between">
          <div>VIN #</div>
          <Tooltip
            showOnClick
            position="top"
            content={isVinCopied ? 'Vin # Copied !' : 'Click to Copy'}
          >
            <div onClick={handleCopy} style={{ fontWeight: 600 }}>
              <CopyableText ref={vinCopyRef}>
                <CopyIcon>
                  <FaRegCopy />
                </CopyIcon>
                {vin}
              </CopyableText>
            </div>
          </Tooltip>
        </Space>
        <Space style={{ paddingBottom: 10 }} align="space-between">
          <div>Stock</div>
          <Tooltip
            showOnClick
            position="left"
            content={isStockCopied ? 'Stock # Copied !' : 'Click to Copy'}
          >
            <div onClick={handleCopyStock} style={{ fontWeight: 600 }}>
              <CopyableText ref={stockCopyRef}>
                <CopyIcon>
                  <FaRegCopy />
                </CopyIcon>
                {stock_number}
              </CopyableText>
            </div>
          </Tooltip>
        </Space>
        <Space style={{ paddingBottom: 10 }} align="space-between">
          <div>Stock Type</div>
          <div style={{ textTransform: 'uppercase', fontWeight: 600 }}>
            {cond === 'used' ? 'Pre-Owned' : cond}
          </div>
        </Space>
        {certified_logos?.length > 0 && (
          <Space style={{ paddingTop: 30 }} alignItems="center" align="start">
            {certified_logos.map((certifiedLogo: any) => (
              <>
                {certifiedLogo.url ? (
                  <a href={certifiedLogo.url} target="_blank">
                    <img
                      src={certifiedLogo.src}
                      alt="carfax-logo"
                      width={85}
                      height={30}
                      style={{ width: 110, height: 'auto' }}
                    />
                  </a>
                ) : (
                  <img
                    src={certifiedLogo.src}
                    alt="carfax-logo"
                    width={85}
                    height={30}
                    style={{ width: 110, height: 'auto' }}
                  />
                )}
              </>
            ))}
          </Space>
        )}
      </VehicleSummaryInfo>

      <div
        style={{
          margin: '0 auto',
          width: '90%',
          paddingBottom: '2rem',
          paddingTop: '2.4rem',
          textAlign: 'center',
        }}
      >
        <Button
          onClick={() => setPageAction('Choose an Option')}
          block
          scale="lg"
          style={{
            backgroundColor: palette.primary.main,
            fontWeight: 400,
            borderRadius: 15,
            fontFamily: 'Arial',
            marginBottom: 10,
          }}
        >
          I'm Interested
        </Button>
        <Button variant="text" onClick={() => setPageAction('Located at')}>
          <Space
            align="center"
            style={{ columnGap: 10, textTransform: 'capitalize' }}
          >
            <MdLocationOn size={17} />
            at {dealer_name}
          </Space>
        </Button>
      </div>
      <VehicleActions />
    </div>
  );
};

export default VehicleSummary;
