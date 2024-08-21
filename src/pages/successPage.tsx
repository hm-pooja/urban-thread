import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Confetti from 'react-confetti';
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

const SuccessPage: React.FC = () => {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000); 

        return () => clearTimeout(timer);
    }, []);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {showConfetti && <Confetti width={width} height={height} />}
                <Typography variant="h5">Purchase Successful!</Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    Thank you for your purchase.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    Go To Home
                </Button>
            </Box>
        </Box>
    )
}
export default SuccessPage;