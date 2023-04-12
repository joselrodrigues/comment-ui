import { render, screen } from '@testing-library/react';

import Comment from './';
import { defaultAvatarUrl } from './constants';

describe('Comment', () => {
	it('should renders Comment component with the provided content', () => {
		render(
			<Comment
				author="John Doe"
				email="john@example.com"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				avatarUrl="https://example.com/avatar.jpg"
			/>
		);

		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(screen.getByText('john@example.com')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			)
		).toBeInTheDocument();
		expect(screen.getByAltText('Avatar')).toBeInTheDocument();
		expect(screen.getByAltText('Avatar')).toHaveAttribute(
			'src',
			'https://example.com/avatar.jpg'
		);
	});

	it('should renders Comment component with default avatar when avatarUrl is not provided', () => {
		render(
			<Comment
				author="John Doe"
				email="john@example.com"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
		);

		expect(screen.getByAltText('Avatar')).toBeInTheDocument();
		expect(screen.getByAltText('Avatar')).toHaveAttribute(
			'src',
			defaultAvatarUrl
		);
	});
});
