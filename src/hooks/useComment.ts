import { useQuery } from '@tanstack/react-query';

import { getCommentList } from '../api';

export const useComment = (postId: number) => {
  // 댓글 불러오기
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentList(postId),
  });

  return {
    comments,
    isCommentsLoading,
    isCommentsError,
  };
};
