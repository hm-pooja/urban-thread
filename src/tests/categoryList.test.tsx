import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CategoryList from '../components/categoryList';

describe('CategoryList', () => {
    const categories = ['electronics', 'jewelery', 'clothing'];

    const setup = () => {
        render(
            <Router>
                <CategoryList categories={categories} />
            </Router>
        );
    };

    test('renders category chips', () => {
        setup();
        categories.forEach(category => {
            expect(screen.getByText(category)).toBeInTheDocument();
        });
    });

});
