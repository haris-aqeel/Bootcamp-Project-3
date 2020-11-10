import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStateValue } from "../States/GlobalState";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles((theme) => ({
  root1: {
    flexWrap: "wrap",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 4px rgba(12, 0, 50, 0.5)",
  },
  root2: {
    margin: "0 auto",
    width: "100%",
    minWidth: "350px",
    textAlign: "center",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    flexFlow: "row",
    boxShadow: "4px 4px 4px rgba(12, 0, 50, 0.5)",
  },
  Paper1: {
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexFlow: "column",
  },

  Paper2: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "inherit",
    padding: "10px 10px",
    marginTop: "20px",
  },

  Paper3: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: 'center',
    width: "100%",
    height: 'auto',
    padding: "30px 10px",
    marginTop: "20px",
  },

  button: {
    border: "2px solid rgba(12, 0, 50, 0.9)",
    color: "rgba(12, 0, 50, 0.9)",
    width: "200px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3px 20px",

    "&:hover": {
      backgroundColor: "rgba(12, 0, 50, 0.9)",
      color: "#fff",
    },
  },
  buttondelete: {
    border: "2px solid rgba(12, 0, 50, 0.9)",
    color: "rgba(12, 0, 50, 0.9)",
    width: "100px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3px 20px",
    margin: "0 auto",
    fontSize: "12px",
    marginTop: "30px",

    "&:hover": {
      backgroundColor: "rgba(12, 0, 50, 0.9)",
      color: "#fff",
    },
  },

  button3: {
    backgroundColor: "rgba(12, 0, 50, 0.9)",
    color: '#fff',
    width: 'auto',
    padding: '4px 20px',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: '10px',
    "&:hover": {
      border: "2px solid rgba(12, 0, 50, 0.9)",
      color: "rgba(12, 0, 50, 0.9)",
      backgroundColor: '#fff'
    },

  },

  name2: {
    fontSize: "18px",
    fontWeight: "600",
  },

  pricetag: {
    width: "80px",
    height: "80px",
    borderRadius: "60%",
    backgroundColor: "rgba(12, 0, 50, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  table: {
   
      fontFamily: 'arial, sans-serif',
      borderCollapse: 'collapse',
      width: 'auto',
  },
  td: {
    border: '1px solid rgba(12, 0, 50, 0.9) ',
    textAlign: 'left',
    padding: '10px 20px',
  }

}));

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  const classes = useStyles();

  let priceArray = basket.map(({ price }) =>  price );

  const handleDeleteItem = (id) => {
    dispatch({
      type: "Remove_From_Basket",
      payload: id,
    });
  };

  return basket.length === 0 ? (
    <>
      <div className={classes.root1}>
        <Paper className={classes.Paper1} elevation={3}>
          <h2 className={classes.text}>Your Cart is Empty</h2>
          <Button
            size="small"
            className={classes.button}
            component={Link}
            to="/product"
          >
            <AddShoppingCartIcon /> Go to Products
          </Button>
        </Paper>
      </div>
    </>
  ) : (
    <div className={classes.root2}>
      {basket.map((curr, ind) => {
        return (
          <>
            <Paper key={ind} className={classes.Paper2} elevation={3}>
              <div>
                <img
                  src={curr.image === undefined ? curr.images[0]:curr.image }
                  width="120px"
                  height="120px"
                  alt={curr.name}
                />
              </div>

              <div style={{ alignSelf: "center" }}>
                <p className={classes.name2}>{curr.name}</p>
                <Button
                  size="small"
                  className={classes.buttondelete}
                  onClick={() => handleDeleteItem(curr.id)}
                >
                  <DeleteIcon />
                  Remove
                </Button>
              </div>

              <div className={classes.pricetag}>
                <h3>${curr.price}</h3>
              </div>
            </Paper>
          </>
        );
      })}

      <Paper className={classes.Paper3} elevation={3}>
        <div>
          <h1 style={{alignSelf: 'flex-start', padding: '20px 4px 5px 4px'}}>Checkout</h1>
          <Button
            
            size="small"
            className={classes.button3}
          >
            <PaymentIcon /> Proceed To Payment
          </Button>
        </div>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.td}>Item Charges</td>
              <td className={classes.td}>${priceArray.reduce((prev, curr) => prev + curr, 0)}</td>
            </tr>
            <tr>
              <td className={classes.td}>Delievery Charges</td>
              <td className={classes.td}>$0.00</td>
            </tr>
            <tr>
              <th className={classes.td}>Total Charges</th>
              <th className={classes.td}>${priceArray.reduce((prev, curr) => prev + curr, 0)}</th>
            </tr>
          </tbody>
        </table>
      </Paper>
    </div>
  );
};

export default Checkout;
