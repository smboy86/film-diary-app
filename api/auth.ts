import axiosClient from './axiosClient';

const rootUrl = 'auth';

const ApiAuth = {
  // 로그인
  login({ email, password }: { email: string; password: string }) {
    return axiosClient({
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
      url: `/${rootUrl}/user/${email}`,
      method: 'get',
    });
  },
  // 회원가입
  join(data: {
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
    agreeTermPrivacy: boolean;
  }) {
    return axiosClient({
      url: `/${rootUrl}/join`,
      method: 'post',
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
  },
  // 회원정보 수정(필명)
  modName({ id, name }: { id: string; name: string }) {
    return axiosClient({
      url: `/${rootUrl}/profile`,
      method: 'patch',
      data: {
        id,
        name,
      },
    });
  },
};

export default ApiAuth;
