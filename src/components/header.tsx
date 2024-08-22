import { AppBar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";  // Ensure you have this action
import { useState } from "react";


interface HeaderProps {
    showCartIcon?: Boolean;
}
const Header: React.FC<HeaderProps> = ({ showCartIcon = true }) => {
    const cartCount = useSelector((state: RootState) => state.cart.items.length);
    const username = useSelector((state: RootState) => state.auth.username);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [popupMenu, setPopupMenu] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setPopupMenu(event.currentTarget);
    };

    const handleMenuClose = () => {
        setPopupMenu(null);
    };

    const handleProfileClick = () => {
        navigate("/profile");
        setPopupMenu(null); 
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
        handleMenuClose();
    };

    return (
        <AppBar position='static' color="primary" sx={{ width: '100%' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                    Urban Thread
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {showCartIcon && (
                        <IconButton color="inherit" onClick={() => navigate('/cart')}>
                            <Badge badgeContent={cartCount} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    )}

                    <IconButton color='inherit' onClick={handleMenuOpen}>
                        <AccountCircle />
                        {username && (
                            <Typography variant='subtitle1' sx={{ marginLeft: 1 }}>
                                {username}
                            </Typography>
                        )}
                    </IconButton>
                    <Menu
                        anchorEl={popupMenu}
                        open={Boolean(popupMenu)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
