import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';


import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import DeleteIcon from '@material-ui/icons/Delete';

import accounting from 'accounting';
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';

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
  cardActions:{
    display:"flex",
    justifyContent: "space-between",
    textAlign:"center",
  },
  cardRating:{
      display:"flex",
  }


}));

export default function CheckoutCard({product : {id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();
  const [{basket},dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch ({
    type: actionTypes.REMOVE_ITEM,
    id,
  })
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
     
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {Array(rating)
       .fill()
       .map((_,i)=> (
         <p>&#11088;</p>

       )
       )
       }
       </div>
       <IconButton>
           <DeleteIcon fontSize="large" onClick={removeItem}/>
       </IconButton>
       
      </CardActions>
      
    </Card>
  );
}
