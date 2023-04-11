import type { Meta, StoryObj } from '@storybook/react';

import CommentComponent from './index';

const meta = {
    title: 'Atoms/Comment',
    component: CommentComponent,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Comment: Story = {
    args: {
        author:"Jose L. Rodrigues",
        email:"thisis@anemial.com",
        text: "This is a comment"
    },
};

