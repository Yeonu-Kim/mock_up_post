import React, { useState } from 'react';
import styled from 'styled-components';

import { usePostList } from '../../hooks/usePostList';
import { StyledButton } from '../styles/Button.styled';
import { StyledContainer, StyledContainerH } from '../styles/Container.styled';
import { StyledFont } from '../styles/Font.styled';

type SidebarProps = {
  open: boolean;
};

type NavMenuProps = {
  title: string;
  writer: string;
  postId: number;
};

type NavbarProps = {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
};

export const Navbar = ({ setPostId }: NavbarProps) => {
  const {
    postListWithUsernames,
    isPostListLoading,
    isUsernamesLoading,
    isPostListError,
    isUsernamesError,
  } = usePostList();

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleClickPost = (postId: number) => {
    setPostId(postId);
    setOpen(false);
  };

  const NavMenu = ({ title, writer, postId }: NavMenuProps) => {
    return (
      <StyledNavMenu
        onClick={() => {
          handleClickPost(postId);
        }}
      >
        <StyledFont bold>{title}</StyledFont>
        <StyledContainerH>
          <StyledFont size="S">{writer}</StyledFont>
        </StyledContainerH>
      </StyledNavMenu>
    );
  };

  const renderNavBar = () => {
    if (isPostListLoading || isUsernamesLoading) {
      return (
        <StyledLoadingContainer open={open}>
          <StyledFont>Loading...</StyledFont>
        </StyledLoadingContainer>
      );
    }

    if (isPostListError || isUsernamesError) {
      return (
        <StyledNavBarContainer open={open}>
          <StyledFont>에러가 발생했습니다.</StyledFont>
          <StyledFont>잠시 후 다시 시도해주세요.</StyledFont>
        </StyledNavBarContainer>
      );
    }

    if (
      postListWithUsernames !== undefined &&
      postListWithUsernames.length > 0
    ) {
      return postListWithUsernames.map((post) => (
        <NavMenu
          key={post.id}
          title={post.title}
          writer={post.username}
          postId={post.id}
        />
      ));
    }

    return (
      <StyledNavBarContainer open={open}>
        <StyledFont>작성된 글이 없습니다.</StyledFont>
      </StyledNavBarContainer>
    );
  };

  return (
    <>
      <StyledCloseButton open={open} onClick={toggleSidebar} />
      <StyledNavBarContainer open={open}>
        <StyledButton padding={2}>글 작성하기</StyledButton>
        {renderNavBar()}
      </StyledNavBarContainer>
    </>
  );
};

const StyledNavBarContainer = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: ${(props) => (props.open ? '8rem' : '0')};
  gap: 1rem;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  min-height: ${(props) => (props.open ? '100dvh' : '8rem')};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & > div {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }

  & > button {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 30rem;
    height: 100dvh;
    box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 8px;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: 0.3s;
    padding: 2rem 2rem;

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

    & > div {
      display: flex;
    }

    & > button {
      display: flex;
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

  @media (min-width: 768px) {
    display: none;
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

const StyledLoadingContainer = styled(StyledNavBarContainer)`
  padding-top: 8rem;
`;
