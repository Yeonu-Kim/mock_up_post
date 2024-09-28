import styled from 'styled-components';

import { StyledButton } from '../styles/Button.styled';
import {
  StyledContainer,
  StyledFullContainerH,
} from '../styles/Container.styled';
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
        <StyledFullContainerH>
          <StyledFont size="S" color="gray">
            {commentWriter}
          </StyledFont>
          <ButtonContainer>
            <StyledButton>수정</StyledButton>
            <StyledButton>삭제</StyledButton>
          </ButtonContainer>
        </StyledFullContainerH>
      </StyledContainer>
    );
  };
  return (
    <StyledPostDetail gap={4}>
      <StyledContainer gap={2}>
        <StyledFont size="L" bold>
          제목
        </StyledFont>
        <StyledFullContainerH>
          <StyledFont size="S" color="gray">
            작성자
          </StyledFont>
          <ButtonContainer>
            <StyledButton>수정</StyledButton>
            <StyledButton>삭제</StyledButton>
          </ButtonContainer>
        </StyledFullContainerH>
      </StyledContainer>
      <StyledFont>글 내용</StyledFont>
      <StyledContainer gap={2}>
        <StyledFont bold>댓글</StyledFont>
        <StyledContainer alignH="right">
          <CommentInput />
          <StyledButton>댓글 작성</StyledButton>
        </StyledContainer>
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
    max-width: 80rem;
    margin: 0 auto;
    padding-top: 10rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 0.5px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
  resize: none;
  height: 100px;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
  }
`;
