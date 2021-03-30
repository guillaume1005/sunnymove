import { Typography } from '@material-ui/core';
import React, { useState } from 'react';

export default function MainView() {


    return (
        <center>
            <div style={{display: 'flex', justifyContent:'center', backgroundColor:'white', marginTop: '200px', flex: 1, padding: 40, width: '40vw', borderRadius: '30px'}}>
                <Typography style={{color: 'green'}}>
                    Votre place a bien été réservée, merci pour votre confiance !
                </Typography>
            </div>
        </center>
    )
}