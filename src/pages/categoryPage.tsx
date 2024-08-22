import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../components/productCard';

const CategoryPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        if (categoryName) {
            const fetchCategoryProducts = async () => {
                const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
                const data = await response.json();
                setProducts(data);
            }
            fetchCategoryProducts();
        }
    }, [categoryName]);

    if (!categoryName) {
        return <Typography>Category not found</Typography>
    }
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Typography variant='h4' sx={{ marginTop: '20px', paddingX: 4 }}>
                {categoryName?.toUpperCase()}
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '20px', paddingX: 4 }}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}
export default CategoryPage;