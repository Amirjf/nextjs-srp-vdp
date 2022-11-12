import DisclaimerTooltip from '../../../shared-components/tag-discaimer/DisclaimerTooltip';
import {
  CardTopLabelContainer,
  CardTopLabelContent,
} from '../style/cardTopLabel.styles';

type CardTopLabelProps = {
  text: string;
  disclaimer: string;
  shape?: 'sharp' | 'rounded';
};

const CardTopLabel = ({ text, disclaimer, shape }: CardTopLabelProps) => {
  return (
    <>
      <DisclaimerTooltip content={disclaimer}>
        <CardTopLabelContainer>
          <CardTopLabelContent
            style={{ cursor: disclaimer.length > 0 ? 'help' : 'auto' }}
            shape={shape}
          >
            <span>{text?.length > 35 ? text.slice(0, 35) + '...' : text}</span>
          </CardTopLabelContent>
        </CardTopLabelContainer>
      </DisclaimerTooltip>
    </>
  );
};

export default CardTopLabel;
