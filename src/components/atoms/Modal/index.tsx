import React from 'react';

import ModalDefault, { ModalProps as ModalDefaultProps } from './Default';

export interface ModalProps extends ModalDefaultProps {
	type?: string;
}

/**
 * A Modal component that can render different types of modals.
 *
 * @component
 * @example
 * <Modal
 *   title="Modal Title"
 *   body="Modal content goes here."
 *   footer="Modal footer goes here."
 *   isOpen={true}
 *   onClose={() => console.log("Close modal")}
 * />
 */
const Modal: React.FC<ModalProps> = ({ type, ...props }) => {
	switch (type) {
		default:
			return <ModalDefault {...props} />;
	}
};

export default Modal;
