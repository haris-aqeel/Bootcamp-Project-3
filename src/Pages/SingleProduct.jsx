import React from "react";
import { useStateValue } from "../States/GlobalState";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 350,
      display: 'block',
      maxWidth: 360,
      overflow: 'hidden',
      width: '100%',
    },

    Favourite: {
        backgroundColor: 'black',
        color: '#fff',
        width: '200px',
        margin: '0px 15px',
        padding: '8px 5px', 
        display: 'flex',
        justifyContent: 'space-evenly',   
        "&:hover": {
            border: '2px solid black',
            color: 'black',
            backgroundColor: '#fff' 
          }
    },


    Cart: {
        backgroundColor: 'rgba(12, 0, 50, 0.9)',
        color: '#fff',
        width: '200px',
        margin: '0px 15px',
        padding: '8px 5px', 
        display: 'flex',
        justifyContent: 'space-evenly',    
        "&:hover": {
            border: '2px solid rgba(12, 0, 50, 0.9)',
            color: 'rgba(12, 0, 50, 0.9)',
            backgroundColor: '#fff' 
          }

    }
  }));
 

const SingleProduct = () => {

  // UseStateValue to Access to the Global State Data
  const [{ shoesHome }, dispatch] = useStateValue();
  
  // Accessing Product through Link 
  let link = window.location.href;
  for (let i = 0; i < link.length; i++) {
    if (link.slice(i, i + 10) === "/product/:") {
      var id = link.slice(i + 10);
    }
  }
  let Elem = shoesHome.filter((curr) => curr.id === +id);
  let SelectedElem = Elem[0];
  
  // Handling add to Cart click

  const handleClick = () => {
    dispatch ({
        type: 'Add_To_Basket',
        payload: SelectedElem
    })
  }
  
  const tutorialSteps = SelectedElem.images.map((curr)=>{
      return curr
  })

  // Built In Material UI Components
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <div className="Product__Details">
      <div className="Product_Start">
        <h2> {SelectedElem.name} </h2>
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((curr, index) => (
                <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={curr} alt='images_Shoes'/>
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={8}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
            />
    </div>
      </div>
      <div className="Product_End">
        <div className="price__tag">
            ${SelectedElem.price}
        </div>
        <div className='Product__desc'>
            <h2>Decsription</h2>
            <p>{SelectedElem.desc}</p>
        </div>
        <div className='Product__reviews'>
            <h2>Reviews</h2>
            <p><span className='reviews' role="img" aria-labelledby="[]">🌟🌟🌟🌟🌟</span></p>
        </div>
        <div className='Product__Button'>
            <Button size="small" className={classes.Cart} onClick={handleClick}>
                <AddShoppingCartIcon />
                Add to Cart
            </Button>
            <Button size="small" className={classes.Favourite}>
                <FavoriteIcon />
                Mark As Favourite                
            </Button>
        </div>

      </div>
    </div>
  );
};

export default SingleProduct;
