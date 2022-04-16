import axiosClient from './axiosClient';

const rootUrl = 'dairy';

const ApiDairy = {
  // 필름 일기 쓰기
  writeDairy({
    title,
    content,
    userId,
    myFilmId,
  }: {
    title: string;
    content: string;
    userId: string;
    myFilmId: string;
  }) {
    return axiosClient({
      url: `/${rootUrl}`,
      method: 'post',
      data: {
        title,
        content,
        userId,
        myFilmId,
      },
    });
  },
};

export default ApiDairy;
