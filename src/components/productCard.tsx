import { AddShoppingCart } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(addToCart(product))
    }

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    }

    return (
        <Card onClick={handleCardClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                }
            }}
        >
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <CardMedia
                    component='img'
                    image={product.image}
                    alt={product.title}
                    sx={{
                        objectFit: 'contain',
                        width: '100px',
                        height: '160px',
                        marginBottom: 2,
                    }}
                />
            </Box>
            <CardContent sx={{ padding: 2, flexGrow: 1}}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        webkitBoxOrient: 'vertical',
                    }}
                >{product.title}</Typography>
            </CardContent>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2,
                    borderTop: '1px solid #e0e0e0',
                    backgroundColor: '#fafafa',
                }}
            >
                <Typography variant="body2" color='text.secondary'>
                    ${product.price}
                </Typography>
                <IconButton onClick={handleAddCart} aria-label = 'add to cart' color="primary">
                    <AddShoppingCart />
                </IconButton>
            </Box>
        </Card>
    );
}
export default ProductCard;