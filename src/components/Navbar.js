
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../assets/logomarvel.png"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "whitesmoke",
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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#000000' }} >
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={Logo} className={classes.image}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
