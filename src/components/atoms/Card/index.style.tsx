import styled from 'styled-components';

export const CardWrapper = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    padding: 1rem;
    width: 300px;
    transition: 0.3s;
    animation: ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1) ;
    }
`;

export const CardTitle = styled.h2`
    font-size: 1.25rem;
    color: black;
    margin-bottom: 0.5rem;
`;

export const CardUsername = styled.p`
    color: #757575;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    color: black;
    line-height: 1.5;
    text-align: justify;
`;

export const ShowMoreButton = styled.button`
  background: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  outline: none;
  opacity: 1;
  transition: opacity 0.3s ease-out;

  &:hover:enabled {
    opacity: 0.7;
  }

  &:disabled {
    background-color: #cccccc;
    color: #969696;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
