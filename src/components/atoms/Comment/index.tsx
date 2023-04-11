import React from 'react';
import {CommentAuthor, CommentEmail, CommentText, CommentWrapper} from "./index.style";
export interface CommentProps {
    author: string;
    email: string;
    text: string;
}

/**
 * A Comment component that displays an author, email, and text.
 *
 * @component
 * @example
 * <Comment
 *   author="John Doe"
 *   email="john@example.com"
 *   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 * />
 * @param {string} author - The author's name.
 * @param {string} email - The author's email.
 * @param {string} text - The comment text.
 * @returns {JSX.Element} The rendered Comment component.
 */
const Comment: React.FC<CommentProps> = ({ author, text,email }) => {
    return (
        <CommentWrapper>
            <CommentAuthor>{author}</CommentAuthor>
            <CommentEmail>{email}</CommentEmail>
            <CommentText>{text}</CommentText>
        </CommentWrapper>
    );
};

export default Comment;