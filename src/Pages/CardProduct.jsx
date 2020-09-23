import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// Page Importing
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    margin: '0 auto',
    "&:hover": {
      boxShadow: '0px 0px 8px rgba(12, 0, 50, 0.9)'
    }
  },
  media: {
    height: 240,
  },
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0 auto',
    color: '#fff',
    backgroundColor: 'rgba(12, 0, 50, 0.9)',
    width: '150px',
    "&:hover": {
      border: '1px solid  rgba(12, 0, 50, 0.9)',
      color: 'rgba(12, 0, 50, 0.9)',
    }
  }
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
        <Button size="small" component={Link} to="/product" className={classes.button} >
        <AddShoppingCartIcon/>  Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
