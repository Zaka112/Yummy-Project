import React, { useState } from "react";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  CircularProgress,
  Typography,
  IconButton,
  Avatar,
  Collapse,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Card,
  styled,
  List,
  ListItem,
} from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeItem({
  isMealLoading,
  recipe,
  setFavRecipes,
  favRecipes,
}) {
  const [expanded, setExpanded] = useState(false);
  const [favAdded, setFavAdded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function dealFavRecipe(newItem) {
    const filter = favRecipes.filter(
      (favItem) => favItem.idMeal === newItem.idMeal
    );
    if (filter.length > 0) {
      alert("Item Already in fav"); //I know it is not good idea to have alert here. But until I figure out to remove the item
    } else {
      const result = [...favRecipes, newItem];
      setFavRecipes(result);
      setFavAdded(true);
    }
  }

  if (isMealLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {recipe.strMeal[0]}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={recipe.strMeal}
            subheader={recipe.strCategory}
          />
          <CardMedia
            component="img"
            height="194"
            image={recipe.strMealThumb}
            alt={recipe.strTags}
          />
          <CardContent>
            ingredients:
            <List>
              <ListItem>
                1. {recipe.strIngredient1} : {recipe.strMeasure1}
              </ListItem>
              <ListItem>
                2. {recipe.strIngredient2} : {recipe.strMeasure2}
              </ListItem>
              <ListItem>
                3. {recipe.strIngredient3} : {recipe.strMeasure3}
              </ListItem>
            </List>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              sx={favAdded ? { color: red[700] } : []}
            >
              <FavoriteIcon onClick={() => dealFavRecipe(recipe)} />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>instructions:</Typography>
              <Typography paragraph>{recipe.strInstructions}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
}
