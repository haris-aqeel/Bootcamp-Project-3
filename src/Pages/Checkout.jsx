import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStateValue } from "../States/GlobalState";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Paper: {
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    flexFlow: "column",
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.root}>
      {basket.length === 0 ? (
        <Paper className={classes.Paper} elevation={3}>
          <h2 className={classes.text}>Your Cart is Empty</h2>
          <Button
            size="small"
            className={classes.button}
            
          >
            <AddShoppingCartIcon /> Add to Cart
          </Button>
        </Paper>
      ) : (
        <div className={classes.nonEmptyBasket}>Basket is not Empty</div>
      )}
    </div>
  );
};

export default Checkout;
