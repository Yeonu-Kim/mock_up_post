import styled from 'styled-components';

import { StyledContainer } from '../styles/Container.styled';
import { StyledFont } from '../styles/Font.styled';

type PostDetailProps = {
  comment: string;
  commentWriter: string;
};
export const PostDetail = () => {
  const CommentContainer = ({ comment, commentWriter }: PostDetailProps) => {
    return (
      <StyledContainer>
        <StyledFont>{comment}</StyledFont>
        <StyledFont size="S" color="gray">
          {commentWriter}
        </StyledFont>
      </StyledContainer>
    );
  };
  return (
    <StyledPostDetail gap={4}>
      <StyledContainer gap={2}>
        <StyledFont size="L" bold>
          제목
        </StyledFont>
        <StyledFont size="S" color="gray">
          작성자
        </StyledFont>
      </StyledContainer>
      <StyledFont>글 내용</StyledFont>
      <StyledContainer gap={2}>
        <StyledFont bold>댓글</StyledFont>
        <StyledContainer>
          <CommentContainer comment="댓글" commentWriter="김연우" />
        </StyledContainer>
        <StyledContainer>
          <CommentContainer comment="댓글" commentWriter="김연우" />
        </StyledContainer>
        <StyledContainer>
          <CommentContainer comment="댓글" commentWriter="김연우" />
        </StyledContainer>
      </StyledContainer>
    </StyledPostDetail>
  );
};

const StyledPostDetail = styled(StyledContainer)`
  padding: 0rem 3rem;

  @media (min-width: 768px) {
    padding-top: 10rem;
  }
`;
