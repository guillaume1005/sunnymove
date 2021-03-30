import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Images } from '../../Common/Images';
import Button from '../../components/Button';
import { labels } from '../../Common/AppTexts';
import { Colors } from '../../Common/Colors';
import './index.css';
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import {BrowserRouter} from 'ReactRouter';


// function handleClick() {
//     let history = useHistory();
//     history.push("/Login");
//   }

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
   

    const start = <Link to='/'><img alt="logo" src={Images.logo} height="40" className="p-mr-2" /></Link>;
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
    