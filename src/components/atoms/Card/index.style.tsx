import styled from 'styled-components';

export const CardWrapper = styled.div`
    background-color: gray;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    padding: 1rem;
    width: 300px;
`;

export const CardTitle = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
`;

export const CardUsername = styled.p`
    color: #757575;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
`;