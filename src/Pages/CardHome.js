import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Page Importing
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
    root: {
      width: 300,
    },
    media: {
      height: 200,
      
     
    },
  });


const CardHome = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image[0]}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h3">
              <strong>{props.name}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.detail.slice(0,110)+ '....'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
    <Button size="small" component={Link} to='/product' >
            More Products
          </Button>
          <Button size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
};

export default CardHome;
