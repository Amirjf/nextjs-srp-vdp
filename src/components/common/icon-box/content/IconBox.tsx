import {
  IconBoxContainer,
  IconContainer,
  TitleContainer,
} from '../styles/iconBox.styles';
import { IconBoxProps } from './iconBox_types';

const IconBox = ({ title, icon, grow, ...props }: IconBoxProps) => {
  return (
    <IconBoxContainer {...props}>
      <IconContainer>{icon}</IconContainer>
      <TitleContainer>{title}</TitleContainer>
    </IconBoxContainer>
  );
};

export default IconBox;
