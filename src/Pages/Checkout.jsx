import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStateValue } from "../States/GlobalState";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: '4px 4px 4px rgba(12, 0, 50, 0.5)'
  },
  Paper: {
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "lightblue",
    flexFlow: "column",
  },

  Paper2: {
    width: '400px',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "lightblue",
    flexFlow: "row",
  },

  button: {
    border: '2px solid rgba(12, 0, 50, 0.9)',
    color: 'rgba(12, 0, 50, 0.9)',
    width: '200px',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: '3px 20px',

    "&:hover": {
      backgroundColor: 'rgba(12, 0, 50, 0.9)',
      color: '#fff'
    }
  }
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
            component= {Link}
            to = '/product'
            
          >
            <AddShoppingCartIcon /> Go to Products
          </Button>
        </Paper>
      ) : (
        
          
            basket.map((curr)=>{
              return <Paper className={classes.Paper2} elevation={3}>
                <div>
                  <img 
                  src={curr.image}
                  width="100px"
                  height="100px"
                  alt={curr.name}
                  />
                </div>
                
                <div>
                  <p>{curr.name}</p>
                </div>
                
                <div>
                  <h3>{curr.price}</h3>
                </div>
              </Paper>
            } 
            )
   
   
      )}
    </div>
  );
};

export default Checkout;
