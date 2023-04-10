import React from 'react';
import {CardWrapper, CardTitle, CardDescription, CardUsername} from './index.style'

interface CardProps {
    title: string;
    username: string;
    description: string;
}

/**
 * A Card component that displays a title, username, and description.
 *
 * @param {CardProps} props - The properties for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> = ({ title, username, description }) => {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardUsername>{username}</CardUsername>
            <CardDescription>{description}</CardDescription>
        </CardWrapper>
    );
};

export default Card;