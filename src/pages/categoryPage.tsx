import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";
import { useFetchData } from "../customHook/customHook";

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { data: products, error, loading } = useFetchData<any[]>({
    url: `https://fakestoreapi.com/products/category/${categoryName}`,
  });

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!categoryName) {
    return <Typography>Category not found</Typography>;
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" sx={{ marginTop: "20px", paddingX: 4 }}>
        {categoryName?.toUpperCase()}
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "20px", paddingX: 4 }}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
