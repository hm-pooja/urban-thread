import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from '../components/productCard';
import cartReducer from '../redux/slices/cartSlice';

const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 29.99,
    description: 'This is a test product description.',
    image: 'https://via.placeholder.com/150',
    category: 'Test Category',
};

const mockStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

const renderProductCard = () => {
    render(
        <Provider store={mockStore}>
            <Router>
                <ProductCard product={mockProduct} />
            </Router>
        </Provider>
    );
};

describe('ProductCard', () => {
    beforeEach(() => {
        renderProductCard();
    });

    test('renders title text', () => {
        const titleElement = screen.getByText(/Test Product/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders price', () => {
        const priceElement = screen.getByText(/\$29\.99/i);
        expect(priceElement).toBeInTheDocument();
    });

    test('renders image with correct src', () => {
        const imageElement = screen.getByRole('img');
        expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
        expect(imageElement).toHaveAttribute('alt', 'Test Product');
    });

    test('increments item quantity in cart', () => {
        const addToCartButton = screen.getByLabelText('add to cart');
        fireEvent.click(addToCartButton);

        const increaseButton = screen.getByLabelText('increase quantity');
        fireEvent.click(increaseButton);

        const quantityElement = screen.getByText('2');
        expect(quantityElement).toBeInTheDocument();
    });

});