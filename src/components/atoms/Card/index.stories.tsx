import type { Meta, StoryObj } from '@storybook/react';

import CardComponent from './index';

const meta = {
	title: 'Components/Atoms/Card',
	component: CardComponent,
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
	args: {
		title: 'This is a title',
		username: 'Jose L Rodrigues',
		description: 'This is a description',
	},
};
