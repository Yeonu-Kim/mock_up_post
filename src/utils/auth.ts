// import type { User } from '../entities';

// type GetUserJWT = Pick<User, 'token'>;

export const getToken = () => localStorage.getItem('ywk_token');

// export const clearToken = () => {
//   localStorage.removeItem('ywk_token');
// };

// export const saveToken = ({ token }: GetUserJWT) => {
//   clearToken();
//   localStorage.setItem('snutt_token', token);
// };
