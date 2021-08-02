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
import { actionTypes } from '../reducer';
import {useStateValue}  from '../StateProvider';


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
 

  const [{basket},dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket= () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name,
        productType,
        image,
        price,
        rating,
        description,

      },

    });


  };

  return (
    <Card className={classes.root} style={{backgroundColor: "#1c1b1b",color: '#ffffff'}}>
      <CardHeader style={{ color: '#ffffff' }}
        
        action={
         <Typography 
            style={{ color: '#ffffff' }}
            className={classes.action}
             variant='h6'
             color='textSrcondary'>
            {accounting.formatMoney(price,"Lps")}
            
         </Typography>
        }
        title={name}
        
        
        subheader={<Typography  style={{ color: '#ffffff' }}>Disponible</Typography>}
       
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: '#ffffff' }}>
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      
        <IconButton aria-label='Add to Cart' style={{ color: '#ffffff' }} onClick={addToBasket} >
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating)
       .fill()
       .map((_,i)=> (
         <p>&#11088;</p>

       )
       )
       }
        <IconButton
          style={{ color: '#ffffff' }}
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
          <Typography paragraph>{description}</Typography>
          
          
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
