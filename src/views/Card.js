import React, { useState } from 'react';
import Card from '../components/CreditCard';
import Stripe from '../components/Stripe'


export default function LoginView() {


    const [pending, setPending] = useState(false)
    const logUser = (userData) => {
        setPending(true);

    }
    return (
        <Stripe/>
    )
}