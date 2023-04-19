import React, { PropsWithChildren } from 'react';

import { ReactComponent as Icon } from './assets/closeIcon.svg';
import {
	CloseIcon,
	ModalBackdrop,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalWrapper,
} from './index.style';
import usePulse from './index.utils';

export interface ModalComposition {
	Header: React.FC<{ title: string }>;
	Body: React.FC<PropsWithChildren<{}>>;
	Footer: React.FC<PropsWithChildren<{}>>;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

/**
 * A compound Modal component that can be composed using its sub-components.
 * It accepts children and handles open and close actions.
 *
 * @component
 * @example
 * <Modal>
 *   <Modal.Header title="Modal Title" />
 *   <Modal.Body>Modal content goes here.</Modal.Body>
 *   <Modal.Footer>Modal footer goes here.</Modal.Footer>
 * </Modal>
 */
const Modal: React.FC<PropsWithChildren<ModalProps>> & ModalComposition = ({
	children,
	isOpen = false,
	onClose,
}) => {
	const [isPulsing, handleClick] = usePulse(onClose);

	return (
		<>
			{isOpen && (
				<ModalBackdrop data-testid="modal-backdrop" onClick={onClose}>
					<ModalWrapper>
						<ModalContent onClick={(e) => e.stopPropagation()}>
							<CloseIcon
								className={isPulsing ? 'pulse' : ''}
								onClick={handleClick}
								data-testid="modal-closeIcon"
							>
								<Icon />
							</CloseIcon>
							{children}
						</ModalContent>
					</ModalWrapper>
				</ModalBackdrop>
			)}
		</>
	);
};

/**
 * Header is a sub-component of the Modal that displays the Modal's header.
 * @param {string} title - The title text to be displayed.
 */
Modal.Header = ({ title }: { title: string }) => {
	return <ModalHeader>{title}</ModalHeader>;
};
Modal.Header.displayName = 'Modal.Header';

/**
 * Body is a sub-component of the Modal that displays the Modal's content.
 */
Modal.Body = ({ children }: PropsWithChildren<{}>) => {
	return <ModalBody>{children}</ModalBody>;
};
Modal.Body.displayName = 'Modal.Body';

/**
 * Footer is a sub-component of the Modal that displays the Modal's footer.
 */
Modal.Footer = ({ children }: PropsWithChildren<{}>) => {
	return <div>{children}</div>;
};
Modal.Footer.displayName = 'Modal.Footer';

export default Modal;
