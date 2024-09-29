import styled from 'styled-components';

import { StyledButton } from '../styles/Button.styled';
import {
  StyledContainer,
  StyledFullContainerH,
} from '../styles/Container.styled';
import { StyledFont } from '../styles/Font.styled';

type CommentProps = {
  comment: string;
  email: string;
};

export const Comment = ({ comment, email }: CommentProps) => {
  // 이메일 중 앞 네 글자만 아이디로 사용
  const commentWriter = email.split('@')[0] ?? '익명의 댓글 작성자';
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
