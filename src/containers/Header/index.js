import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Images } from '../../Common/Images';
import Button from '../../components/Button';
import { labels } from '../../Common/AppTexts';
import { Colors } from '../../Common/Colors';
import './index.css';

export default function Header (props) {

    const items = [
        {
            label: 'Nos partenaires',
        },
        {
            label: 'Notre équipe',
        },
        {
            label: 'Agences',
        },
        {
            label: "Centre d'aide",
        },
    ];
   

    const start = <img alt="logo" src={Images.logo} height="40" className="p-mr-2"/>;
    const end = <Button style={{backgroundColor: ""}} label='Mes réservations'></Button>
    return (
        <div>
            <div className="card">
                <Menubar 
                id='menu'
                    model={items} 
                    start={start} 
                    end={end}
                    style={{backgroundColor:'#fff'}}
                />
            </div>
            {props.children}
        </div>
    );
}
    