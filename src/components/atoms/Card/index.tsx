import React from 'react';

import CardDefault from './Default';

export interface CardProps {
	type?: string;
	title: string;
	username: string;
	description: string;
	onClick?: () => void;
}

/**
 * A Card component that displays a title, username, and description.
 *
 * @component
 * @param {string} type - The type of the card.
 * @param {CardProps} props - The properties for the Card component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.username - The username displayed on the card.
 * @param {string} props.description - The description displayed on the card.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> = ({ type, ...props }) => {
	switch (type) {
		default:
			return <CardDefault {...props} />;
	}
};

export default Card;
