import { render, screen } from '@testing-library/react';
import CartItem from '../components/cartItem';
import { Provider } from 'react-redux';
import { store } from '../redux/store';


describe('CartItem', () => {
    const item = {
        product: {
            id: 1,
            title: 'Test Product',
            price: 29.99,
            image: 'https://via.placeholder.com/150',
        },
        quantity: 2,
    };
    
    const setup = () => render(
        <Provider store={store}>
            <CartItem item={item} />
        </Provider>
    );

    test('renders product title', () => {
        setup();
        expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    test('renders product price', () => {
        setup();
        expect(screen.getByText('$29.99')).toBeInTheDocument();
    });

    test('renders product image', () => {
        setup();
        const img = screen.getByAltText('Test Product');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150');
    });  
    
});
