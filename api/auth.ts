import axiosClient from './axiosClient';

const rootUrl = 'auth';

export default {
  // 로그인
  login({ email, password }: { email: string; password: string }) {
    return axiosClient({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: `/${rootUrl}/login`,
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
  // 이메일로 사용자 찾기
  getUserByEmail(email: string) {
    return axiosClient({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: `/${rootUrl}/user/${email}`,
      method: 'get',
    });
  },
};
