export const currencyFormat = (num: number) => {
  return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const EXT_COLORS: any = {
  white: 'white',
  black: 'black',
  silver: 'silver',
  gray: 'grey',
  red: '#f44336',
  green: '#8bc34a',
  blue: '#1e90ff',
  beige: 'beige',
  brown: '#8b4513',
  gold: '#daa520',
  yellow: '#ffe800',
  orange: '#ff9600',
  purple: '#800080',
  whiteblack: 'linear-gradient(45deg, #fff 47%, #000 53%)',
  silverred: 'linear-gradient(45deg, #ccc 47%, #f44336 53%)',
  whiteblue: 'linear-gradient(45deg, #fff 47%, #1e90ff 53%)',
  other: 'linear-gradient(to right, #d9afd9 0%, #97d9e1 100%)',
};
