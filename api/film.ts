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
  // 모든 필름통 보기
  getAllFilmList() {
    return axiosClient({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: `/${rootUrl}/`,
      method: 'get',
    });
  },
  // 필름통 생성하기
  createMyFilm({
    filmIndex,
    filmName,
    filmId,
    userId,
  }: {
    filmIndex: number;
    filmName: string;
    filmId: string;
    userId: string;
  }) {
    return axiosClient({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: `/${rootUrl}/`,
      method: 'post',
      data: {
        filmIndex: filmIndex,
        filmName: filmName,
        filmId: filmId,
        userId: userId,
      },
    });
  },
};

export default ApiFilm;
