import React, { useState } from 'react';

import Card from '../base';
import { ButtonWrapper } from '../index.style';
import { hasExceededCharLimit, truncateDescription } from '../index.utils';

export interface CardProps {
	title: string;
	username: string;
	description: string;
	onClick?: () => void;
}

/**
 * A Card component that displays a title, username, and description.
 *
 * @component
 * @param {CardProps} props - The properties for the Card component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.username - The username displayed on the card.
 * @param {string} props.description - The description displayed on the card.
 * @returns {JSX.Element} The rendered Card component.
 */
const CardDefault: React.FC<CardProps> = ({
	title,
	username,
	description,
	...props
}) => {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const maxLength = 100;

	const toggleFullDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<Card {...props}>
			<Card.Title title={title} />
			<Card.Author username={username} />
			<Card.Description
				description={
					showFullDescription
						? description
						: truncateDescription(description, maxLength)
				}
			/>
			<ButtonWrapper>
				<Card.Button
					text={showFullDescription ? 'Show Less' : 'Show More'}
					onClick={(event: React.MouseEvent) => {
						event.stopPropagation();
						toggleFullDescription();
					}}
					disabled={!hasExceededCharLimit(description, maxLength)}
				/>
			</ButtonWrapper>
		</Card>
	);
};

export default CardDefault;
