import { fireEvent, render, screen } from '@testing-library/react';

import Post, { CommentProps, PostProps } from './index';

const mockComments: CommentProps[] = [
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

const mockPostProps: PostProps = {
	title: 'Sample Post Title',
	body: 'Sample post body content',
	comments: mockComments,
	isOpen: true,
	onClose: jest.fn(),
};

describe('PostM', () => {
	it('should render the Post with title, body, and comments', () => {
		render(<Post {...mockPostProps} />);

		expect(screen.getByText('Sample Post Title')).toBeInTheDocument();
		expect(screen.getByText('Sample post body content')).toBeInTheDocument();
		expect(screen.getByText('This is a sample comment.')).toBeInTheDocument();
		expect(
			screen.getByText('This is another sample comment.')
		).toBeInTheDocument();
	});

	it('should call onClose when clicking outside the modal content', () => {
		render(<Post {...mockPostProps} />);

		fireEvent.click(screen.getByTestId('modal-backdrop'));
		expect(mockPostProps.onClose).toHaveBeenCalledTimes(1);
	});

	it('should call onClose when clicking on close icon', () => {
		render(<Post {...mockPostProps} />);

		fireEvent.click(screen.getByTestId('modal-closeIcon'));
		expect(mockPostProps.onClose).toHaveBeenCalledTimes(1);
	});
});
