import React from 'react';

import Comment from '../../atoms/Comment';
import Modal from '../../atoms/Modal';

export interface CommentProps {
	id: number;
	name: string;
	email: string;
	body: string;
}

interface AllCommentsProps {
	comments: CommentProps[];
}

/**
 * Renders a list of comments.
 * @param {CommentProps[]} comments - An array of comment objects containing id, name, email, and body.
 * @returns {JSX.Element} - The rendered list of comments.
 */
const AllComments: React.FC<AllCommentsProps> = ({ comments }) => {
	return (
		<>
			{comments?.map(({ id, name, email, body }) => (
				<Comment author={name} email={email} text={body} key={id} />
			))}
		</>
	);
};

export interface PostProps {
	title: string;
	body: React.ReactNode;
	comments: CommentProps[];
	isOpen: boolean;
	onClose: () => void;
}

/**
 * Renders a post with a title, body, and comments as footer content in a modal.
 * @param {string} title - The title of the post.
 * @param {React.ReactNode} body - The body content of the post.
 * @param {CommentProps[]} comments - An array of comment objects containing id, name, email, and body.
 * @param {boolean} isOpen - A boolean value to control the modal's visibility.
 * @param {() => void} onClose - A function to close the modal.
 * @returns {JSX.Element} - The rendered post with comments in a modal.
 */
const Post: React.FC<PostProps> = ({
	title,
	body,
	comments,
	isOpen,
	onClose,
}) => {
	return (
		<Modal
			title={title}
			body={body}
			footer={<AllComments comments={comments} />}
			isOpen={isOpen}
			onClose={onClose}
		/>
	);
};

export default Post;
