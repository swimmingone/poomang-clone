import { useRecoilState } from 'recoil';
import { tagListState } from '../store/tagListState';
import { Tag } from '../types/Tag';
import { useCallback } from 'react';

const useTagListState = () => {
	const [tags, setTags] = useRecoilState(tagListState);

	const addTags = useCallback(
		(data: Tag[]) => {
			const newTags = data.map((newTag) => {
				return { name: newTag.name, color: newTag.color };
			});
			const newList = [...tags, ...newTags];
			setTags(newList);
		},
		[tags, setTags],
	);

	return { tags, addTags };
};

export default useTagListState;
