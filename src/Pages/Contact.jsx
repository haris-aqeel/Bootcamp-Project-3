import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DuoIcon from '@material-ui/icons/Duo';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "20px auto",
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
  },

  paper__div: {
    padding: "30px 17px",
    margin: "0 auto",
    textAlign: "justify",
    opacity: '0.7',

    "&:hover": {
        opacity: 1,
      }


  },

  paper__div__ul: {
    marginBottom: "6px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="page__contact">
      <h2 style={{ textAlign: "center", paddingBottom: "80px", color: '#fff', fontSize: '24px' }}>
        Contact Us
      </h2>
      
      <div className={classes.paper}>
        <Paper elevation={3}>
          <div className={classes.paper__div}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "20px",
              }}
            >
              Pakistan
            </h3>
            <ul style={{ listStyle: "none", marginLeft: '10px' }}>
              <li className={classes.paper__div__ul}>Karachi</li>
              <li className={classes.paper__div__ul}>Peshawar</li>
              <li className={classes.paper__div__ul}>Islamabad</li>
              <li className={classes.paper__div__ul}>Quetta</li>
              <li className={classes.paper__div__ul}>Lahore</li>
            </ul>
            <Button size='small' variant="contained"style={{fontSize: '12px', border: '1px solid rgba(12, 0, 50, 0.9)', }} className='paper__button'>
              Details
            </Button>
          </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classes.paper__div}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "20px",
              }}
            >
            America
            </h3>
            <ul style={{ listStyle: "none", marginLeft: '10px' }}>
              <li className={classes.paper__div__ul}>Washington DC</li>
              <li className={classes.paper__div__ul}>Pentagon</li>
              <li className={classes.paper__div__ul}>California</li>
              <li className={classes.paper__div__ul}>San Fransisico</li>
              <li className={classes.paper__div__ul}>Venus</li>
            </ul>
            <Button size='small' variant="contained"style={{fontSize: '12px', border: '1px solid rgba(12, 0, 50, 0.9)', }} className='paper__button'>
              Details
            </Button>
          </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classes.paper__div}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "20px",
              }}
            >
              India
            </h3>
            <ul style={{ listStyle: "none", marginLeft: '10px' }}>
              <li className={classes.paper__div__ul}>New Dehli</li>
              <li className={classes.paper__div__ul}>Bombay</li>
              <li className={classes.paper__div__ul}>Calcutta</li>
              <li className={classes.paper__div__ul}>Punjab</li>
              <li className={classes.paper__div__ul}>Dehli</li>
            </ul>
            <Button size='small' variant="contained"style={{fontSize: '12px', border: '1px solid rgba(12, 0, 50, 0.9)', }} className='paper__button'>
              Details
            </Button>
          </div>
        </Paper>
      </div>
      <div className='Icons'>
          <span><FacebookIcon /></span>
          <span><TwitterIcon /></span>
          <span><WhatsAppIcon /></span>
          <span><InstagramIcon/></span>
          <span><YouTubeIcon/></span>
          <span><DuoIcon/></span>
      </div>
    
    </div>
  );
};

export default Contact;
