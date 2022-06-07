export type Tag = {
	name: string;
	color: TagColor;
};

export type TagColor = null | '' | 'info' | 'success' | 'warning' | 'error';
