import React from 'react';

import CommentRaw from './base';
import { CommentContent } from './index.style';

export interface CommentProps {
	author: string;
	email: string;
	text: string;
	avatarUrl?: string;
}

/**
 * A Comment component that displays an author, email, text, and avatar.
 *
 * @component
 * @example
 * <Comment
 *   author="John Doe"
 *   email="john@example.com"
 *   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *   avatarUrl="https://example.com/avatar.jpg"
 * />
 * @param {string} author - The author's name.
 * @param {string} email - The author's email.
 * @param {string} text - The comment text.
 * @param {string} avatarUrl - The URL of the author's avatar image.
 * @returns {JSX.Element} The rendered Comment component.
 */
const Comment: React.FC<CommentProps> = ({
	author,
	text,
	email,
	avatarUrl,
}) => {
	return (
		<CommentRaw>
			<CommentRaw.Avatar src={avatarUrl} />
			<CommentContent>
				<CommentRaw.Author name={author} />
				<CommentRaw.Email email={email} />
				<CommentRaw.Text text={text} />
			</CommentContent>
		</CommentRaw>
	);
};

export default Comment;
