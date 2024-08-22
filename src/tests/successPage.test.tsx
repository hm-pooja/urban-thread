import { render, screen, fireEvent } from '@testing-library/react';
import SuccessPage from '../pages/successPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

jest.mock('react-confetti', () => () => null);

describe('SuccessPage Component', () => {
    const setup = (initialRoute = '/success') => render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );

    test('renders success message', () => {
        setup();
        const successMessage = screen.getByText('Purchase Successful!');
        expect(successMessage).toBeInTheDocument();
    });

    test('renders thank you message', () => {
        setup();
        const thankYouMessage = screen.getByText('Thank you for your purchase.');
        expect(thankYouMessage).toBeInTheDocument();
    });

    test('renders "Go to Home" button and navigates on click', () => {
        setup();
        const goHomeButton = screen.getByRole('button', { name: /go to home/i });
        expect(goHomeButton).toBeInTheDocument();

        fireEvent.click(goHomeButton);
        expect(screen.getByText('Home Page')).toBeInTheDocument();
    });
});
