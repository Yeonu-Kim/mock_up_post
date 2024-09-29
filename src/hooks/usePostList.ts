import { useQuery } from '@tanstack/react-query';

import { getPostList, getUserName } from '../api';
import type { Post } from '../entities';

type PostListWithUsername = Omit<Post, 'userId'> & {
  username: string;
};

export const usePostList = () => {
  const {
    data: postList,
    isLoading: isPostListLoading,
    isError: isPostListError,
  } = useQuery({
    queryKey: ['postList'],
    queryFn: getPostList,
  });

  // 작성자 아이디를 작성자 이름으로 변경
  const fetchUserNamesForPosts = async (
    posts: Post[],
  ): Promise<PostListWithUsername[]> => {
    return Promise.all(
      posts.map(async (post) => {
        const { username } = await getUserName(post.userId);
        return {
          ...post,
          username,
        };
      }),
    );
  };

  const {
    data: postListWithUsernames,
    isLoading: isUsernamesLoading,
    isError: isUsernamesError,
  } = useQuery({
    queryKey: ['postListWithUsernames'],
    queryFn: () =>
      postList !== undefined ? fetchUserNamesForPosts(postList) : [],
    enabled: postList !== undefined,
  });

  return {
    postListWithUsernames,
    isPostListLoading,
    isUsernamesLoading,
    isPostListError,
    isUsernamesError,
  };
};
