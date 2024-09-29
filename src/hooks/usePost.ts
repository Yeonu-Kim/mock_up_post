import { useQuery } from '@tanstack/react-query';

import { getPost, getUserName } from '../api';

export const usePost = (postId: number) => {
  // 작성자 아이디를 작성자 이름으로 변경
  const {
    data: postWithUsername,
    isLoading: isPostDetailLoading,
    isError: isPostError,
  } = useQuery({
    queryKey: ['postWithUsername', postId],
    queryFn: async () => {
      const postDetail = await getPost(postId);
      const { username } = await getUserName(postDetail.userId);

      return {
        ...postDetail,
        username,
      };
    },
  });

  return {
    postWithUsername,
    isPostDetailLoading,
    isPostError,
  };
};
