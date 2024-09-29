import axios from 'axios';

import { baseUrl } from '../config';
import { getToken } from '../utils/auth';

export const client = axios.create({
  baseURL: baseUrl,
});

// // form을 사용할 때 header에 넣기
// export const urlEncodedFormConfig = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
// };

// 토큰이 있으면 토큰 삽입하여 요청
client.interceptors.request.use(function (config) {
  const token = getToken();
  if (token !== null) {
    config.headers['x-access-token'] = token;
  }
  return config;
});

export default client;
