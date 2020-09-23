import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Page Importing
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: '6px'
  },
  media: {
    height: '380px',
    width: '300px'
  },
});

const CardProduct = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h3">
            <strong>{props.name}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" component={Link} to="/product">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
