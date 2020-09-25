import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useStateValue } from '../States/GlobalState'


const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      Paper: {
          width: '300',
          height: '500',
          
      },
    },
  }));
  


const Checkout = () => {
    const [{basket}] = useStateValue();
    const classes = useStyles();
    
   return(
    <div className={classes.root}>
       {basket.length === 0 ? 
        <div className={classes.emptyBasket}>
        
        <Paper className={classes.Paper} elevation={3}>
            The Cart is Empty
        </Paper>    
        
        </div>:
        <div className={classes.nonEmptyBasket}>
            
            Basket is not Empty
        
        </div> }
       </div>
   );
}

export default Checkout
