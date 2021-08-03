
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../../assets/logomarvel.png"
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';
import reducer from '../reducer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "#000000",
      boxShadow: "none",
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
      
    },
    image: {
      marginRight: "10px",
      height:"2rem",

    },
  }));

export default function Navbar() {
  const classes = useStyles();
  const [{basket,user},dispatch] = useStateValue();
  

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar >
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={Logo} className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" >
            bienvenido, {user ? user.email : "invitado"}
          </Typography>
          
          <div className={classes.button}>
            <Link to="/singin">
              <Button variant="contained" color="secondary" style={{ background: '#E42B06' }}> 
                              {user? "Sing Out" :"Sing In"}
                </Button>
                </Link>
                <Link to="checkout-page">
                <IconButton aria-label="show cart Items" color="inherit"  style={{ color: '#FFFFFF' }}>
                    <Badge badgeContent={basket?.length} color="secondary">
                        <ShoppingCart fontSize="large" />
                    </Badge>
                    
                    </IconButton>
                </Link>

                
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
