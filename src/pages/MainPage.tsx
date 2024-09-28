import styled from 'styled-components';

import { Navbar } from '../components/common/Navbar';
import { PostDetail } from '../components/post/PostDetail';
import { StyledContainer } from '../components/styles/Container.styled';

export const MainPage = () => {
  return (
    <StyledDashBoardContainer gap={4}>
      <Navbar />
      <PostDetail />
    </StyledDashBoardContainer>
  );
};

const StyledDashBoardContainer = styled(StyledContainer)`
  margin-left: 0;
  transition: margin-left 0.3s;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100dvh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
