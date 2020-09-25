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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStateValue } from '../States/GlobalState'






const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    margin: '0 auto',
    position: 'relative',
    "&:hover": {
      boxShadow: '0px 0px 8px rgba(12, 0, 50, 0.9)'
    }
  },
  media: {
    height: 240,
  },
  pricetag: {
    border: '1px solid rgba(12, 0, 50, 0.9)',
    width: '60px',
    height: '35px',
    position: 'absolute',
    backgroundColor: 'rgba(12, 0, 50, 0.9)',
    zIndex: 1000,
    right: '10px',
    top: '12px',
    color: '#fff',
    borderRadius: '100%'
    
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


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CardProduct = (props) => {
  
  const [{basket}, dispatch] = useStateValue();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSnakbarClick = () => {
    setOpen(true);
    console.log(basket)
    dispatch({
      type: 'Add_To_Basket',
      payload: props
    })

  };

  const handleSnakbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Card className={classes.root}>
      <div className={classes.pricetag}>
          <h2>${props.price}</h2>
      </div>
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
        <Button size="small" className={classes.button}  onClick={handleSnakbarClick} >
        <AddShoppingCartIcon/>  Add to Cart
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleSnakbarClose}>
        <Alert onClose={handleSnakbarClose} severity="success">
          Item added to Cart!
        </Alert>
      </Snackbar>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
