import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CartItemProps } from "../types/types";

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      updateQuantity({ id: item.product.id, quantity: item.quantity + 1 })
    );
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ id: item.product.id, quantity: item.quantity - 1 })
      );
    } else {
      if (window.confirm("Remove this item from the cart?")) {
        dispatch(removeFromCart({ id: item.product.id }));
      }
    }
  };
  return (
    <Card sx={{ display: "flex", alignItems: "center", padding: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <img
            src={item.product.image}
            alt={item.product.title}
            style={{ width: "100px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h6">{item.product.title}</Typography>
            <Typography variant="body2">
              ${item.product.price.toFixed(2)}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleDecrease} aria-label="decrease quantity">
            <Remove />
          </IconButton>
          <Typography variant="body2" display="inline" sx={{ marginX: 1 }}>
            {item.quantity}
          </Typography>
          <IconButton onClick={handleIncrease} aria-label="increase quantity">
            <Add />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};
export default CartItem;
