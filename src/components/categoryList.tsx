import { Chip, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CategoryListProps {
    categories: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    const navigate = useNavigate();
    const handleCategoryClick = (category: string) => {
        navigate(`/category/${category}`);
    }
    return (
        <Grid>
            {categories.map((category) => (
                <Grid>
                    <Chip
                        label={category}
                        onClick={() => handleCategoryClick(category)}
                        style={{ cursor: 'pointer'}}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
export default CategoryList;