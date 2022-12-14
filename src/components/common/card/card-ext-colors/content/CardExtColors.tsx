import React from "react";
import { ColorsWrapper, ColorExtItem } from "../styles/cardExtColors.styles";

type CardExtColors = {
  colors: string[];
};

const CardExtColors: React.FC<CardExtColors> = ({ colors }: CardExtColors) => {
  return (
    <ColorsWrapper>
      {colors.map((color: string, idx: number) => (
        <ColorExtItem key={`${color}-${idx}`} color={color.toLowerCase()} />
      ))}
    </ColorsWrapper>
  );
};

export default CardExtColors;
