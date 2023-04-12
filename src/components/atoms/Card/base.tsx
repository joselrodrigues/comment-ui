import React, { PropsWithChildren } from 'react';

import {
	CardButton,
	CardDescription,
	CardTitle,
	CardUsername,
	CardWrapper,
} from './index.style';

interface ButtonProps {
	text: string;
	[key: string]: any;
}

interface ContentComposition {
	Title: React.FC<{ title: string }>;
	Author: React.FC<{ username: string }>;
	Description: React.FC<{ description: string }>;
	Button: React.FC<React.PropsWithChildren<ButtonProps>>;
}

/**
 * CardBase is a flexible card component that can be composed using its sub-components.
 * It accepts children and additional props.
 */
const CardBase: React.FC<PropsWithChildren<{}>> & ContentComposition = ({
	children,
	...props
}) => {
	return <CardWrapper {...props}>{children}</CardWrapper>;
};

/**
 * Title is a sub-component of CardBase that displays the card's title.
 * @param {string} title - The title text to be displayed.
 */
CardBase.Title = ({ title }: { title: string }) => {
	return <CardTitle>{title}</CardTitle>;
};
CardBase.Title.displayName = 'CardBase.Title';

/**
 * Author is a sub-component of CardBase that displays the card's author.
 * @param {string} username - The author's username to be displayed.
 */
CardBase.Author = ({ username }: { username: string }) => {
	return <CardUsername>{username}</CardUsername>;
};
CardBase.Author.displayName = 'CardBase.Author';

/**
 * Description is a sub-component of CardBase that displays the card's description.
 * @param {string} description - The description text to be displayed.
 */
CardBase.Description = ({ description }: { description: string }) => {
	return <CardDescription>{description}</CardDescription>;
};
CardBase.Description.displayName = 'CardBase.Description';

/**
 * Button is a sub-component of CardBase that displays a button.
 * @param {string} text - The button text to be displayed.
 * @param {Object} props - Additional props to be passed to the CardButton component.
 */
CardBase.Button = ({ text, ...props }: { text: string }) => {
	return <CardButton {...props}>{text}</CardButton>;
};
CardBase.Button.displayName = 'CardBase.Button';

export default CardBase;
