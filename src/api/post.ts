import type { GetPostListResponse, GetPostResponse } from '../entities';
import { client } from './client';

export const getPost = async (postId: number): Promise<GetPostResponse> => {
  const response = await client.get<GetPostResponse>(`posts/${postId}`);
  return response.data;
};

export const getPostList = async (): Promise<GetPostListResponse> => {
  const response = await client.get<GetPostListResponse>('posts');
  return response.data;
};
