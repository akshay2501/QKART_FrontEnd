import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Rating,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({product, handleAddToCart }) => {
  const {name,cost,rating,image,_id}=product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${cost}
          </Typography>
          <Box display="flex">
            <Rating
              name="read-only"
              value={rating}
              readOnly
              size="small"
            />
            <Box sx={{ ml: 1 }}>({rating})</Box>
        </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="" fullWidth color="primary" variant="contained" value={_id} onClick={handleAddToCart}>
          <AddShoppingCartOutlined />  ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
