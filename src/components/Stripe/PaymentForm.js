import React from 'react';
import { CardElement, useElements, useStripe, CardCvcElement } from "@stripe/react-stripe-js";
import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

import Card from './Card'
import { Typography } from '@material-ui/core';



// to make style

const useStyles = makeStyles((theme) => ({

    checkoutButton: {
        backgroundColor: "#1266f1",
        color: "white",
        marginBottom: 20,
        marginTop: 40,
        width: '300px',
        "&:hover": {
            backgroundColor: "#5a5c5a",
        },
        "&:disabled": {
            color: "#bfbfbf",
        },
    },

    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardContainer: {
        marginTop: '30px',
        width: '400px'

    },
    bigContain : {
        marginTop: '50px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        flex: 4,
        justifyContent: 'center',
        width: '40vw',
        marginBottom:'20px'

    },

}));





const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {


            iconColor: "blue",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: '21px',
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "black" },

        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm(props) {
    const history = useHistory();
    const stripe = useStripe()
    const elements = useElements()
    const classes = useStyles(); // the hooks are used inside of a react component


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            // this is where we put the payment

            type: "card",
            card: elements.getElement(CardElement)

        })


        if (!error) {
            try {
                // we can put this in the submit
                const { id } = paymentMethod
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/payment`, // this is where we catch the error, no need to specify the port, automatically redirected in it
                    {

                        cart: props.cart, // here we put the id of the food
                        id

                    })

                if (response.data.success) {
                    console.log('Successful payment')
                    // props.order() // to order also after the payment
                }

            }
            catch (error) {

                console.log('Error', error)

            }
        }

        else {
            console.log(error.message)
        }
    }

    return (

        <>

        <center>
        <div className={classes.bigContain}>
            <center>
                <Typography style={{fontSize:'20px', marginTop: 10}}>
                    Paiement
                </Typography>
            <div className={classes.cardContainer} onChange={console.log('boss')}>
                <CardElement options={CARD_OPTIONS} onChange={(event)=>console.log(event)} />
                
            </div>

            </center>

            <div className={classes.container}>
                {/* <form onSubmit={handleSubmit}> */}

          

                {/* <input type="submit" value="Submit"></input> */}
                <Button
                    fullWidth
                    className={classes.checkoutButton}
                    onClick={()=>history.push('/successful')}
                >
                    Je réserve !
             </Button>

                {/* </form> */}
            </div>

        </div>
        <Card/>
        </center>


        </>
    )
}