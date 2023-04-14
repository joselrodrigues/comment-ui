import type { Meta, StoryObj } from '@storybook/react';

import ModalComponent from './index';

const meta = {
	title: 'Components/Atoms/Modal',
	component: ModalComponent,
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
	args: {
		isOpen: true,
		title: 'This is a title',
		body: 'This is a body',
		footer: 'This is a footer',
		onClose: () => {},
	},
};
