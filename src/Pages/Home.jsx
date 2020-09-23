import React from 'react'
import { useStateValue } from '../States/GlobalState'
import CardHome from './CardHome'
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

const Home = () => {

    const classes = useStyles();
    const [{shoesHome}] = useStateValue();
    

    return (
        <>
            <div className={classes.root}>
            <h2 className={classes.head__Home}>Top Rated Product</h2>
                <Grid container spacing={3} className={classes.singleGrid}>
                    {shoesHome.filter((current)=>current.rating === 5 ).map((curr)=>{
                        return (<Grid item  className={classes.grid} key= {curr.id}>
                            <CardHome 
                            key = {curr.id}
                            id= {curr.id}
                            name= {curr.name}
                            detail = {curr.desc}
                            image = {curr.images}
                            />
                        </Grid>)
                    })}
                </Grid>
            </div>

            <div className={classes.root}>
            <h2 className={classes.head__Home}>Top Reviewed Product</h2>
                <Grid container spacing={3} className={classes.singleGrid}>
                    {shoesHome.filter((current)=>current.reviewsCount > 66 ).map((curr)=>{
                        return (<Grid item className={classes.grid} key= {curr.id}> 
                            <CardHome 
                            id= {curr.id}
                            name= {curr.name}
                            detail = {curr.desc}
                            image = {curr.images}
                            />
                        </Grid>)
                    })}
                </Grid>
            
            </div>    

        </>
        
         
    )
}

export default Home
