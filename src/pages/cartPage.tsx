import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import CartItem from "../components/cartItem";
import constants from "../constants/constants";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/success");
  };
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ marginY: 3, paddingX: 4 }}>
        <Typography variant="h4" style={{ marginTop: "20px" }}>
        {constants.cartPage.title} {totalQuantity} {totalQuantity === 1 ? constants.cartPage.itemLabel : constants.cartPage.itemsLabel}
        </Typography>
        <Grid container spacing={2} style={{ marginTop: " 20px" }}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography variant="h6">
              {constants.cartPage.totalProductsLabel} {totalQuantity}
              </Typography>
              <Typography>{constants.cartPage.totalPriceLabel} ${totalPrice.toFixed(2)}</Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCheckout}
                disabled={totalQuantity === 0}
              >
                {constants.cartPage.proceedButtonLabel}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default CartPage;
