import styled from 'styled-components';

type StyledFontProps = {
  size?: 'XL' | 'L' | 'R' | 'S';
  bold?: boolean;
  color?: 'white' | 'black' | 'primary' | 'gray' | 'inherit';
};

export const StyledFont = styled.span<StyledFontProps>`
  font-size: ${({ theme, size = 'R' }) => `${theme.font[size]}rem`};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  line-height: ${({ theme, size = 'R' }) => `${theme.font[size] * 1.5}rem`};
  color: ${({ theme, color = 'inherit' }) =>
    color !== 'inherit' ? theme.color[color] : color};
`;
