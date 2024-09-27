type ColorProps = {
  default: string;
  black: string;
  white: string;
  background: string;
  primary: string;
};

type FontSizeProps = {
  XL: number;
  L: number;
  R: number;
  S: number;
};

const color: ColorProps = {
  default: 'transparent',
  black: '#000000',
  white: '#ffffff',
  background: '#faf8ef',
  primary: 'ff2400',
};

const font: FontSizeProps = {
  XL: 8.0,
  L: 2.4,
  R: 1.6,
  S: 1.0,
};

export const theme = {
  color,
  font,
};

export type ThemeProps = typeof theme;
