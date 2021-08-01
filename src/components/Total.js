
import React from 'react';
import accounting from 'accounting';

import { makeStyles,Button } from '@material-ui/core';

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
    return(

        <div className={classes.root}>
            <h5>Total items: 3</h5>
            <h5> {accounting.formatMoney(50,"Lps")}</h5>
            <Button className={classes.button} variant="contained" color="secondary">Comprar</Button>
        </div>
    )

}
 
export default Total