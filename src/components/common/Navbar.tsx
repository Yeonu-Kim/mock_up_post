// Sidebar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledContainer, StyledContainerH } from '../styles/Container.styled';
import { StyledFont } from '../styles/Font.styled';

type SidebarProps = {
  open: boolean;
};

type NavMenuProps = {
  title: string;
  writer: string;
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const NavMenu = ({ title, writer }: NavMenuProps) => {
    return (
      <StyledNavMenu>
        <StyledFont bold>{title}</StyledFont>
        <StyledContainerH>
          <StyledFont size="S">{writer}</StyledFont>
        </StyledContainerH>
      </StyledNavMenu>
    );
  };

  return (
    <>
      <StyledCloseButton open={open} onClick={toggleSidebar} />
      <StyledNavBarContainer open={open}>
        <NavMenu title="제목 1" writer="김연우" />
        <NavMenu title="제목 1" writer="김연우" />
      </StyledNavBarContainer>
    </>
  );
};

const StyledNavBarContainer = styled.div<SidebarProps>`
  display: flex;
  position: sticky;
  flex-direction: column;
  padding: 2rem;
  padding-top: ${(props) => (props.open ? '6rem' : '0')};
  gap: 1rem;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: ${(props) => (props.open ? '100dvh' : '8rem')};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & > div {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }

  @media (min-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 2rem;
    position: relative;
    width: ${(props) => (props.open ? '30rem' : '0')};
    height: 100dvh;
    box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 8px;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: 0.3s;
    padding: 8rem 2rem;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.color.gray} transparent;

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.color.gray};
      border-radius: 1rem;
      background-clip: padding-box;
      border: 5px solid transparent;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
`;

const StyledCloseButton = styled.span<SidebarProps>`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 2;
  font-size: 36px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};

  &:before,
  &:after {
    position: absolute;
    left: 2rem;
    content: ' ';
    height: 2rem;
    width: 0.2rem;
    background-color: #000;
  }
  &:before {
    top: ${({ open }) => (open ? '0' : '0.5rem')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(90deg)')};
  }
  &:after {
    top: ${({ open }) => (open ? '0' : '1.5rem')};
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(-90deg)')};
  }
`;

const StyledNavMenu = styled(StyledContainer)`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  & > span {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
