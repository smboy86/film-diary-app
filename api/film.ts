import axiosClient from './axiosClient';

const rootUrl = 'film';

const ApiFilm = {
  // 나의 필름통 리스트
  getMyFilmList(userId: string) {
    return axiosClient({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: `/${rootUrl}/${userId}`,
      method: 'get',
    });
  },
};

export default ApiFilm;
