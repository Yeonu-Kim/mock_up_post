type ColorProps = {
  default: string;
  black: string;
  white: string;
  background: string;
  primary: string;
  gray: string;
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
  primary: '#F7EED3',
  gray: '#575757',
};

const font: FontSizeProps = {
  XL: 8.0,
  L: 2.4,
  R: 1.6,
  S: 1.2,
};

export const theme = {
  color,
  font,
};

export type ThemeProps = typeof theme;
