import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ProfilePage:React.FC = () => {
    const username = useSelector((state: RootState) => state.auth.username);
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexGrow: 1 
                }}
            >
                <Typography variant="h4">
                    Hello {username}!
                </Typography>
            </Box>
        </Box>
    )
}
export default ProfilePage;