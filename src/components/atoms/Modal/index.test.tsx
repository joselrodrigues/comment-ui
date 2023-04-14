import { act, fireEvent, render, screen } from '@testing-library/react';

import Modal from './index';

describe('Modal', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	it('should renders the modal with the provided content', () => {
		const handleClose = jest.fn();

		render(
			<Modal
				title="Modal Title"
				body={<div>Modal content goes here.</div>}
				footer={<div>Modal footer goes here.</div>}
				isOpen={true}
				onClose={handleClose}
			/>
		);

		expect(screen.getByText('Modal Title')).toBeInTheDocument();
		expect(screen.getByText('Modal content goes here.')).toBeInTheDocument();
		expect(screen.getByText('Modal footer goes here.')).toBeInTheDocument();
	});

	it('should calls the onClose function when clicking outside the modal content', () => {
		const handleClose = jest.fn();

		render(
			<Modal
				title="Modal Title"
				body={<div>Modal content goes here.</div>}
				footer={<div>Modal footer goes here.</div>}
				isOpen={true}
				onClose={handleClose}
			/>
		);

		fireEvent.click(screen.getByTestId('modal-backdrop'));
		act(() => {
			jest.runAllTimers();
		});
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('should calls the onClose function when clicking on close icon', () => {
		const handleClose = jest.fn();

		render(
			<Modal
				title="Modal Title"
				body={<div>Modal content goes here.</div>}
				footer={<div>Modal footer goes here.</div>}
				isOpen={true}
				onClose={handleClose}
			/>
		);

		fireEvent.click(screen.getByTestId('modal-closeIcon'));
		act(() => {
			jest.runAllTimers();
		});
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('should does not call the onClose function when clicking inside the modal content', () => {
		const handleClose = jest.fn();

		render(
			<Modal
				title="Modal Title"
				body={<div>Modal content goes here.</div>}
				footer={<div>Modal footer goes here.</div>}
				isOpen={true}
				onClose={handleClose}
			/>
		);

		fireEvent.click(screen.getByText('Modal content goes here.'));
		expect(handleClose).toHaveBeenCalledTimes(0);
	});
});
