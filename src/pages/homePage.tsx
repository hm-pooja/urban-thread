import React, { useEffect } from 'react';
import Header from "../components/header";
import { loadCategories } from "../redux/slices/categorySlice";
import { loadProducts } from '../redux/slices/productSlice';
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid } from "@mui/material";
import ProductCard from '../components/productCard';
import CategoryList from "../components/categoryList";
import axios from "axios";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const categories = useSelector((state: RootState) => state.categories.items);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                dispatch(loadProducts(response.data));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                dispatch(loadCategories(response.data));

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchProducts();
        fetchCategories();
    }, [dispatch]);

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ marginY: 4, paddingX: 4 }}>
                <CategoryList categories={categories} />
            </Box>
            <Grid container spacing={3} justifyContent="center" sx={{ paddingX: 4}}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default HomePage;