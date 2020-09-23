import React from 'react'
import { useStateValue } from '../States/GlobalState'
import CardProduct from './CardProduct'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '0 auto',
    },
    
    singleGrid: {
        margin: '20px 0px'
    },
    grid: {
        maxWidth: '355px',
    },
    head__Home: {
        paddingLeft: '15px',
        textShadow: '1px 0px 3px rgba(12, 0, 50, 0.6)' ,
        fontSize: '22px'
    }
  }));


const Product = () => {
    const classes = useStyles();
    const [{shoesProduct}] = useStateValue();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.singleGrid}>
                {shoesProduct.map((curr)=>{
                    return (<Grid item  className={classes.grid} key= {curr.id}>
                        <CardProduct
                        key = {curr.id}
                        id= {curr.id}
                        name= {curr.name}
                        image = {curr.image}
                        />
                    </Grid>)
                })}
            </Grid>
        </div>

    )
}

export default Product
