import React, { useEffect } from "react";
import { loadCategories } from "../redux/slices/categorySlice";
import { loadProducts } from "../redux/slices/productSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/productCard";
import CategoryList from "../components/categoryList";
import axios from "axios";
import { useFetchData } from "../customHook/customHook";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.categories.items);


  const { data: productData } = useFetchData<any[]>({
    url: "https://fakestoreapi.com/products",
  });

  const { data: categoryData } = useFetchData<string[]>({
    url: "https://fakestoreapi.com/products/categories",
  });

  useEffect(() => {
    if (productData) dispatch(loadProducts(productData));
    if (categoryData) dispatch(loadCategories(categoryData));
  }, [dispatch, productData, categoryData]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Box sx={{ marginY: 4, paddingX: 4 }}>
        <CategoryList categories={categories} />
      </Box>
      <Grid container spacing={3} justifyContent="center" sx={{ paddingX: 4 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
