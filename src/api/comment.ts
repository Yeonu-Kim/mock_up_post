import type { GetCommentResponse } from '../entities';
import { client } from './client';

export const getCommentList = async (
  postId: number,
): Promise<GetCommentResponse> => {
  const response = await client.get<GetCommentResponse>(
    `posts/${postId}/comments`,
  );

  const commentList = response.data.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    body: comment.body,
    email: comment.email,
  }));

  return commentList;
};
