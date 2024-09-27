import type { MouseEvent } from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  color?: 'primary' | 'white' | 'black';
  background?: 'primary' | 'white' | 'black';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: ${({ theme, color = 'white' }) => theme.color[color]};
  background-color: ${({ theme, background = 'primary' }) =>
    theme.color[background]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
`;
