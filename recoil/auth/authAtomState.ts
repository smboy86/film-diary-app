import { atom } from 'recoil';

const authAtomState = atom({
  key: 'authAtomState',
  default: {
    isLogin: false,
  },
});

export default authAtomState;
