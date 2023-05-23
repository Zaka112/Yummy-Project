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
  ListItem
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

export default function RecipeItem({ isMealLoading, meal }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
                {meal.strMeal[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={meal.strMeal}
            subheader={meal.strCategory}
          />
          <CardMedia
            component="img"
            height="194"
            image={meal.strMealThumb}
            alt={meal.strTags}
          />
          <CardContent>ingredients:
            <List>
              <ListItem>1. {meal.strIngredient1} : {meal.strMeasure1}</ListItem>
              <ListItem>2. {meal.strIngredient2} : {meal.strMeasure2}</ListItem>
              <ListItem>3. {meal.strIngredient3} : {meal.strMeasure3}</ListItem>
            </List>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
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
              <Typography paragraph>{meal.strInstructions}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
}
