import { fireEvent, render, screen } from '@testing-library/react';

import CardDefault, { CardProps } from './index';

const mockCardProps: CardProps = {
	title: 'Sample Card Title',
	username: 'SampleUser',
	description:
		'Sample card description. This description is long enough to test the "Show More" and "Show Less" button functionality.',
};

describe('CardDefault', () => {
	it('should render the CardDefault component with title, username, and truncated description', () => {
		render(<CardDefault {...mockCardProps} />);

		expect(screen.getByText('Sample Card Title')).toBeInTheDocument();
		expect(screen.getByText('SampleUser')).toBeInTheDocument();
		expect(screen.getByText(/Sample card description\./)).toBeInTheDocument();
	});

	it('should toggle description between truncated and full when "Show More" and "Show Less" buttons are clicked', () => {
		render(<CardDefault {...mockCardProps} />);

		const showMoreButton = screen.getByText('Show More');
		fireEvent.click(showMoreButton);

		expect(screen.getByText(mockCardProps.description)).toBeInTheDocument();
		expect(screen.getByText('Show Less')).toBeInTheDocument();

		const showLessButton = screen.getByText('Show Less');
		fireEvent.click(showLessButton);

		expect(screen.getByText(/Sample card description\./)).toBeInTheDocument();
		expect(screen.getByText('Show More')).toBeInTheDocument();
	});

	it('should render "Show More" button as disabled when the description is short', () => {
		const shortDescriptionProps: CardProps = {
			...mockCardProps,
			description: 'Short description',
		};
		render(<CardDefault {...shortDescriptionProps} />);

		const showMoreButton = screen.getByText('Show More');
		expect(showMoreButton).toBeInTheDocument();
		expect(showMoreButton).toBeDisabled();
	});
});
