import React, { useEffect } from 'react';
import Header from "../components/header";
import CategoryList from "../components/categoryList";
import { loadCategories } from "../redux/slices/categorySlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import axios from "axios";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.categories.items);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                dispatch(loadCategories(response.data));

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, [dispatch]);

    return (
        <Container>
            <Header />
            <Box sx={{ marginY: 3 }}>
                <CategoryList categories={categories} />
            </Box>
        </Container>
    );
}

export default HomePage;