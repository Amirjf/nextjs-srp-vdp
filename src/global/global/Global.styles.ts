import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };


  body {
    background-color: #F5F5F5;
    font-family: 'Arial', 'Open Sans';
    text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar-track{
    background-color: #F5F5F5;
    }

    ::-webkit-scrollbar{
      width: 6px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb{
      background-color: #000000;
    }
  }

  img{
    width: 100%;
    height: auto;
  }
`;

export const MainContainer = styled.div({
  display: 'flex',
  position: 'relative',
});

const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
      bodyColor: '#F5F5F5',
    },
    primary: {
      main: 'var(--mainColor)' || '#cf2e2e',
    },
    grey: {
      main: '#323232',
      '200': '#ADACAC',
      '400': '#8c8c8c',
      '600': '#595959',
      '800': '#262626',
    },
    vehicleCond: {
      new: { color: '#43CA89' },
      used: { color: '#347ef7' },
      certified: { color: '#F41818' },
    },
    vehicleCardsStockNumber: {
      color: '#595050',
    },
  },
  typography: {
    fontFamily: ['Arial', 'OpenSans'].join(','),
    body1: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    //@ts-ignore
    body2: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 15,
      lineHeight: '25px',
      letterSpacing: '0.15px',
    },
    input: {
      fontWeight: 300,
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    button: {
      sm: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: '20px',
        letterSpacing: '1px',
      },
      md: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '1px',
      },
      lg: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 17,
        lineHeight: '20px',
        letterSpacing: '1px',
      },
    },
    h1: {
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: 35,
      lineHeight: '10px',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: 30,
      lineHeight: '30px',
      letterSpacing: '0px',
    },
    h3: {
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: 25,
      lineHeight: '48px',
      letterSpacing: '0.25px',
    },
    h4: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 20,
      lineHeight: '40px',
      letterSpacing: '0px',
    },
    h5: {
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: 17,
      lineHeight: '28px',
      letterSpacing: '0.15px',
    },
    navs: {
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: 19,
      lineHeight: '28px',
      letterSpacing: '0.35px',
    },
    subtitle1: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },
  },
  sizes: {
    button: {
      sm: {
        height: 20,
      },
      md: {
        height: 40,
        paddingInline: 10,
      },
      lg: {
        height: 50,
        paddingInline: 16,
      },
    },
    xs: {
      height: 38,
      padding: 8,
    },
    sm: {
      height: 48,
      padding: 8,
    },
    md: {
      height: 54,
      padding: 10,
    },
    lg: {
      height: 60,
      padding: 14,
    },
  },

  general: {
    borderRadius: {
      sm: 6,
      md: 5,
      lg: 50,
    },
    imageAspectRatio: '',
    transition: 'all 210ms ease-in-out',
  },
};

export { GlobalStyles, theme };
