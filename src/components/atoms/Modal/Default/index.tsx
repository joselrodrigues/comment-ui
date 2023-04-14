import React from 'react';

import ModalBase from '../base';

export interface ModalProps {
	title: string;
	body: React.ReactNode;
	footer: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

/**
 * A higher-order Modal component that composes ModalBase and its sub-components.
 * It accepts title, body, and footer content as well as open and close actions.
 *
 * @component
 * @example
 * <Modal
 *   title="Modal Title"
 *   body={<div>Modal content goes here.</div>}
 *   footer={<div>Modal footer goes here.</div>}
 *   isOpen={true}
 *   onClose={() => console.log('Close modal')}
 * />
 */
const Modal: React.FC<ModalProps> = ({
	title,
	body,
	footer,
	isOpen,
	onClose,
}) => {
	return (
		<ModalBase isOpen={isOpen} onClose={onClose}>
			<ModalBase.Header title={title} />
			<ModalBase.Body>{body}</ModalBase.Body>
			<ModalBase.Footer>{footer}</ModalBase.Footer>
		</ModalBase>
	);
};

export default Modal;
