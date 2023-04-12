import styled from 'styled-components';

export const CommentWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 16px;
`;

export const CommentContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const CommentAuthor = styled.h4`
	margin: 0;
	margin-bottom: 0.5rem;
	color: black;
`;

export const CommentEmail = styled.p`
	margin: 0;
	font-size: 0.875rem;
	color: #757575;
	margin-bottom: 0.5rem;
`;

export const CommentText = styled.p`
	margin: 0;
	color: black;
	text-align: justify;
`;

export const CommentAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 8px;
`;
