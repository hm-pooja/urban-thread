import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import constants from "../constants/constants";

const ProfilePage: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.username);
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Typography variant="h4">{constants.profilePage.title} {username}!</Typography>
      </Box>
    </Box>
  );
};
export default ProfilePage;
