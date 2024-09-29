import styled from 'styled-components';

import { useComment } from '../../hooks/useComment';
import { usePost } from '../../hooks/usePost';
import { StyledButton } from '../styles/Button.styled';
import {
  StyledContainer,
  StyledFullContainerH,
} from '../styles/Container.styled';
import { StyledFont } from '../styles/Font.styled';
import { Comment } from './Comment';
type PostDetailProps = {
  postId: number;
};

export const PostDetail = ({ postId }: PostDetailProps) => {
  const { postWithUsername, isPostDetailLoading, isPostError } =
    usePost(postId);
  const { comments, isCommentsLoading, isCommentsError } = useComment(postId);

  if (isPostDetailLoading || isCommentsLoading) {
    return (
      <StyledPostDetail alignH="center" gap={4}>
        <StyledFont>Loading...</StyledFont>
      </StyledPostDetail>
    );
  }

  if (isPostError || isCommentsError) {
    return (
      <StyledPostDetail alignH="center" gap={4}>
        <StyledFont>에러가 발생하였습니다.</StyledFont>
        <StyledFont>나중에 다시 실행해주세요.</StyledFont>
      </StyledPostDetail>
    );
  }

  if (postWithUsername === undefined) {
    return (
      <StyledPostDetail alignH="center" gap={4}>
        <StyledFont>존재하지 않는 글입니다.</StyledFont>
      </StyledPostDetail>
    );
  }

  return (
    <StyledPostDetail gap={4}>
      <StyledContainer gap={2}>
        <StyledFont size="L" bold>
          {postWithUsername.title}
        </StyledFont>
        <StyledFullContainerH>
          <StyledFont size="S" color="gray">
            {postWithUsername.username}
          </StyledFont>
          <ButtonContainer>
            <StyledButton>수정</StyledButton>
            <StyledButton>삭제</StyledButton>
          </ButtonContainer>
        </StyledFullContainerH>
      </StyledContainer>
      <StyledFont>{postWithUsername.body}</StyledFont>

      <StyledContainer gap={2}>
        <StyledFont bold>댓글</StyledFont>
        <StyledContainer alignH="right">
          <CommentInput placeholder="댓글을 입력하세요." />
          <StyledButton>댓글 작성</StyledButton>
        </StyledContainer>

        {comments !== undefined ? (
          comments.map((comment, index: number) => (
            <StyledContainer key={index}>
              <Comment comment={comment.body} email={comment.email} />
            </StyledContainer>
          ))
        ) : (
          <StyledFont>첫 댓글을 작성해보세요.</StyledFont>
        )}
      </StyledContainer>
    </StyledPostDetail>
  );
};

const StyledPostDetail = styled(StyledContainer)`
  width: 100%;
  padding: 0 3rem;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    width: calc(100dvw - 30rem);
    padding: 0 6rem;
    padding-top: 10rem;
    position: relative;
    margin-left: 30rem;
  }
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 0.5px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
  resize: none;
  height: 4rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
