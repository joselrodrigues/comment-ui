import React, {useState, PropsWithChildren} from 'react';
import {CardWrapper, CardTitle, CardDescription, CardUsername, ShowMoreButton, ButtonWrapper} from './index.style'
import {hasExceededCharLimit, truncateDescription} from "./index.utils";

export interface CardProps {
    title: string;
    username: string;
    description: string;
    onClick?: ()=> void
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
const Card: React.FC<CardProps> = ({ title, username, description, ...props }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const maxLength = 100;

    const toggleFullDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <CardWrapper {...props}>
            <CardTitle>{title}</CardTitle>
            <CardUsername>{username}</CardUsername>
            <CardDescription>
                {showFullDescription ? description : truncateDescription(description, maxLength)}
            </CardDescription>
            <ButtonWrapper>
                <ShowMoreButton onClick={toggleFullDescription} disabled={!hasExceededCharLimit(description,maxLength)} >
                    {showFullDescription ? 'Show Less' : 'Show More'}
                </ShowMoreButton>
            </ButtonWrapper>
        </CardWrapper>
    );
};

const CardBase = ({children, ...props}:PropsWithChildren<any>) => {
    return (
        <CardWrapper {...props}>
            {children}
        </CardWrapper>
    )

}



export default Card;