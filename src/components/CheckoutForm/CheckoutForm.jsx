import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import * as ordersAPI from '../../utilities/orders-api';

const CheckoutForm = ({ user }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
        return;
    }
    
    try {
        const response = await ordersAPI.createPaymentIntent(user._id);
        console.log('response', response)
        const { clientSecret } = await response.json();
        
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        
        if (result.error) {
            console.error(result.error.message);
        } else {
            setPaymentSuccess(true)
            await ordersAPI.checkout();
      }
    } catch (error) {
      console.error(' payment: error', error);
    }
  };

  return (
    <>
    {paymentSuccess ? (
        <p>Thank you for your purchase </p>
    ):(
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Submit</button>
    </form>
    )}
    </>
  );
};

export default CheckoutForm;
