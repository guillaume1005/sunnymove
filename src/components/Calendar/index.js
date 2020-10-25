import React from 'react' ;
import {Calendar as CalendarImp } from 'primereact/calendar';

export default function Calendar (props) {

    const es = {
        firstDayOfWeek: 1,
        dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        dayNamesShort: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        monthNames: ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "decembre"],
        monthNamesShort: ["jan", "fev", "mar", "avr", "mai", "jun", "jui", "aou", "sep", "oct", "nov", "dec"],
        today: "Auj",
        clear: "Effacer"
    };

    return <CalendarImp locale={es}  {...props}/>
}