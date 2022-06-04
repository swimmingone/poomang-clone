import { atom } from 'recoil';
import { Tag } from '../types/Tag';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const tagListState = atom<Array<Tag>>({
	key: 'tagListState',
	default: [{ name: '예시', color: '' }],
	effects_UNSTABLE: [persistAtom],
});
