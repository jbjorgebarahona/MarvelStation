
import React from 'react';
import accounting from 'accounting';

import { makeStyles,Button } from '@material-ui/core';
import { getBasketTotal } from '../reducer';
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';
const useStyles = makeStyles((theme) =>(

    {

        root:{
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh",
        },
        button:{
            backgroundColor: "#E42B06",
            marginTop:"2rem"
        }
    }
)

)


const Total = () => {
    const classes = useStyles()
    const [{basket},dispatch] = useStateValue();
    return(

        <div className={classes.root}>
            <h5>Total items:{basket?.length}</h5>
            <h5> {accounting.formatMoney(getBasketTotal(basket),"Lps")}</h5>
            <Button className={classes.button} variant="contained" color="secondary">Comprar</Button>
        </div>
    )

}
 
export default Total