import type { MouseEvent } from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  padding?: number;
  color?: 'primary' | 'white' | 'black';
  background?: 'primary' | 'white' | 'black';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ padding = 1 }) => `${padding * 0.5}rem ${padding}rem`};
  border-radius: 0.5rem;
  color: ${({ theme, color = 'black' }) => theme.color[color]};
  background-color: ${({ theme, background = 'primary' }) =>
    theme.color[background]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 1px 1px 2px 1px;
  }
`;
