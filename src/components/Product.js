import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    
    marginTop: "1rem"
  },
  action: {
    marginTop: "1rem",
   
    
  },
  media: {
    height: 0,
    paddingTop: "76.25%", // 16:9
    
  },
  expand: {
    paddingTop:"5rem",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Product({product : {id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
   
        action={
         <Typography 
            className={classes.action}
             variant='h6'
             color='textSrcondary'>
            {accounting.formatMoney(price,"Lps")}
         </Typography>
        }
        title="Blusa  DPL"
        subheader="Disponible"
      />
      <CardMedia
        className={classes.media}
        image="https://images-na.ssl-images-amazon.com/images/I/71d9IuS49bL._AC_UL1500_.jpg"
        title="Camisa Mujer DeadPool"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Camisa de Mujer de Deadpool
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <AddShoppingCart  fontSize='Large'/>
        {Array(4)
       .fill()
       .map((_,i)=> (
         <p>&#11088;</p>

       )
       )
       }
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>"Camisa Mujer de Algodon Manga corta"</Typography>
          
          
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
