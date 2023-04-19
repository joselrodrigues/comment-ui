import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0px 0px 0px 0px rgb(213, 213, 213);
  }
  100% {
    box-shadow: 0px 0px 5px 25px rgba(35, 130, 220, 0);
  }
`;
export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

export const ModalWrapper = styled.div`
	position: relative;
	width: 50%;
`;

export const ModalBody = styled.div`
	text-align: justify;
	margin-bottom: 2rem;
`;

export const ModalContent = styled.div`
	background-color: white;
	border-radius: 5px;
	padding: 20px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
	margin: 0;
	color: black;
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const CloseIcon = styled.div`
	transform: scale(0.7);
	display: flex;
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
	padding: 5px;
	transition: background-color 0.3s ease-in-out;
	border-radius: 50%;
	&:hover {
		background-color: #dfdfdf;
	}
	&.pulse {
		animation: ${pulse} 0.5s ease-in-out;
	}
`;
