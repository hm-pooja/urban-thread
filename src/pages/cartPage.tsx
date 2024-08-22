import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Header from "../components/header";
import CartItem from "../components/cartItem";

const CartPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);

    const handleCheckout = () => {
        dispatch(clearCart());
        navigate('/success');
    }
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header showCartIcon={false}/>
            <Box sx={{ marginY: 3, paddingX: 4 }}>
                <Typography variant='h4' style={{ marginTop: '20px' }}>
                    Cart: {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                </Typography>
                <Grid container spacing={2} style={{ marginTop: ' 20px' }}>
                    <Grid item xs={12} md={8}>
                        {cartItems.map(item => (
                            <CartItem key={item.product.id} item={item} />
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card style={{ padding: '20px' }}>
                            <Typography variant="h6">Total Products: {totalQuantity}</Typography>
                            <Typography>Total Price: ${totalPrice.toFixed(2)}</Typography>
                            <Button variant='contained' color='primary' fullWidth onClick={handleCheckout}
                                disabled={totalQuantity === 0}>
                                Proceed to Buy
                            </Button>
                        </Card>

                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}
export default CartPage;