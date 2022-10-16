import 'styled-component';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette;
    typography: ITypography;
    sizes: ISizes;
    general: IGeneral;
  }
}

type ScreenSize = 'sm' | 'md' | 'lg';
type ScreenSizeObj = { sm: BtnSizes; md: BtnSizes; lg: BtnSizes };
type BtnSizes = { height: number; paddingInline: number };

interface IGeneral {
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
  transition: string;
  [key: string]: any;
}

interface ISizes {
  [key: string]: any;
  sm: { height: number; padding: number };
  md: { height: number; padding: number };
  lg: { height: number; padding: number };
}

interface IPalette {
  common: { black: string; white: string; bodyColor: string };
  grey: PaletteColor;
  primary: PaletteColor;
  vehicleCond: {
    new: { color: string };
    used: { color: string };
    certified: { color: string };
    [key: string]: any;
  };
  vehicleCardsStockNumber: { color: string };
}

interface PaletteColor {
  main: string;
  '200'?: string;
  '400'?: string;
  '600'?: string;
  '800'?: string;
}

interface ITypography {
  fontFamily: string;
  body1: TypographyElement;
  input: TypographyElement;
  button: { [key: string]: any };
  h2: TypographyElement;
  h1: TypographyElement;
  h3: TypographyElement;
  h4: TypographyElement;
  h5: TypographyElement;
  navs: TypographyElement;
  subtitle1: TypographyElement;
  subtitle2: TypographyElement;
}

interface TypographyElement {
  fontWeight: number | string | any;
  fontStyle: string;
  fontSize: number;
  lineHeight: string;
  letterSpacing: string;
}
