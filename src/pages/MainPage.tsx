import { useState } from 'react';
import styled from 'styled-components';

import { Navbar } from '../components/common/Navbar';
import { PostDetail } from '../components/post/PostDetail';
import { StyledContainer } from '../components/styles/Container.styled';

export const MainPage = () => {
  const [postId, setPostId] = useState<number>(1);

  return (
    <StyledDashBoardContainer gap={4}>
      <Navbar setPostId={setPostId} />
      <PostDetail postId={postId} />
    </StyledDashBoardContainer>
  );
};

const StyledDashBoardContainer = styled(StyledContainer)`
  transition: margin-left 0.3s;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100dvh;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100dvh;
    overflow-y: scroll;
  }
`;
