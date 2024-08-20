import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {AccountCircle, ShoppingCart} from  '@mui/icons-material';
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const username = useSelector((state: RootState) => state.auth.username);
    const navigate = useNavigate();
    return (
        <AppBar position='static' color="primary" sx = {{width: '100%'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h6' onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>Urban Thread</Typography>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton color="inherit" onClick={() => navigate('')}>
                        <Badge >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <AccountCircle />
                        {username && (
                            <Typography variant='subtitle1' sx={{marginLeft: 1}}>{username}</Typography>
                        )}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header;