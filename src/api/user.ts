import type { GetUserNameResponse, User } from '../entities';
import { client } from './client';

export const getUserName = async (
  userId: number,
): Promise<GetUserNameResponse> => {
  const response = await client.get<User>(`users/${userId}`);
  return { username: response.data.username };
};
