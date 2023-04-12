import React, { PropsWithChildren } from 'react';

import { defaultAvatarUrl } from './constants';
import {
	CommentAuthor,
	CommentAvatar,
	CommentEmail,
	CommentText,
	CommentWrapper,
} from './index.style';

interface CommentComposition {
	Author: React.FC<{ name: string }>;
	Email: React.FC<{ email: string }>;
	Text: React.FC<{ text: string }>;
	Avatar: React.FC<{ src?: string }>;
}

/**
 * A Comment component that allows composing its content using child components.
 *
 * @component
 * @example
 * <Comment>
 *   <Comment.Avatar src="https://example.com/avatar.jpg" />
 *   <Comment.Author name="John Doe" />
 *   <Comment.Email email="john@example.com" />
 *   <Comment.Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
 * </Comment>
 */
const Comment: React.FC<PropsWithChildren<{}>> & CommentComposition = ({
	children,
}) => {
	return <CommentWrapper>{children}</CommentWrapper>;
};

/**
 * The Author child component for displaying the author's name.
 *
 * @param {string} name - The author's name.
 */
Comment.Author = ({ name }) => {
	return <CommentAuthor>{name}</CommentAuthor>;
};
Comment.Author.displayName = 'Comment.Author';

/**
 * The Email child component for displaying the author's email.
 *
 * @param {string} email - The author's email.
 */
Comment.Email = ({ email }) => {
	return <CommentEmail>{email}</CommentEmail>;
};
Comment.Email.displayName = 'Comment.Email';

/**
 * The Text child component for displaying the comment text.
 *
 * @param {string} text - The comment text.
 */
Comment.Text = ({ text }) => {
	return <CommentText>{text}</CommentText>;
};
Comment.Text.displayName = 'Comment.Text';

/**
 * The Avatar child component for displaying the author's avatar.
 *
 * @param {string} src - The source URL for the avatar image.
 */
Comment.Avatar = ({ src = defaultAvatarUrl }) => {
	return <CommentAvatar src={src} alt="Avatar" />;
};
Comment.Avatar.displayName = 'Comment.Avatar';

export default Comment;
