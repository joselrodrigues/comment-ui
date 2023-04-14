import type { Meta, StoryObj } from '@storybook/react';

import PostComponent, { CommentProps } from './index';

const meta = {
	title: 'Components/Atoms/Post',
	component: PostComponent,
} satisfies Meta<typeof PostComponent>;

const comments: CommentProps[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@example.com',
		body: 'This is a sample comment.',
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'jane@example.com',
		body: 'This is another sample comment.',
	},
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Post: Story = {
	args: {
		isOpen: true,
		title: 'This is a post title',
		body: 'This is a post body',
		comments,
		onClose: () => {},
	},
};
