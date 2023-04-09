import React from 'react';
import './Card.css';

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
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-username">{username}</p>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;