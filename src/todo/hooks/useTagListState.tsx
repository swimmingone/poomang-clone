import { useRecoilState } from 'recoil';
import { tagListState } from '../store/tagListState';
import { Tag } from '../types/Tag';

const useTagListState = () => {
	const [tags, setTags] = useRecoilState(tagListState);

	const addTags = (data: Tag[]) => {
		const newTags = data.map((newTag) => {
			return { name: newTag.name, color: newTag.color };
		});
		const newList = [...tags, ...newTags];
		setTags(newList);
	};

	return { tags, setTags, addTags };
};

export default useTagListState;
