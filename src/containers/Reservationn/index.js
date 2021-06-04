import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import groupImage from "../../assets/big.png"
import "./index.css"

export default function Reservation(props) {

    const [depart, setDepart] = useState('');
    const [arriving, setArriving] = useState('');
    const [cities, setCities] = useState([{ label: "Tunis", value: 'Tunis' }, { label: "Tunis", value: 'Tunis' }])
    const [departDate, setDepartDate] = useState();
    const [arrivingDate, setArrivingDate] = useState();



    return (
		<div
			style={{
				backgroundColor: '#F5F5F5',
				borderRadius: 20,
				padding: 20,
				width: '60%',
				display: 'flex',
				flexDirection: 'column',
				cursor: 'pointer',
			}}
		>
			{/* <div className="p-inputgroup" style={{ marginBottom: 5 }}>
                <span className="p-inputgroup-addon">Depart</span>

                <Dropdown className="p-inputtext-lg" style={{ width: '100%', backgroundColor: '#efefef' }} value={depart} options={cities} onChange={(e) => setDepart(e.value)} optionLabel="label" filter filterBy="label" placeholder="Ville ou Gare" />
            </div> */}
			<div style={{ marginBottom: 5, textAlign: 'center', fontFamily: 'Arial', fontSize: 20 }}>
				Qui sommes-nous ?
			</div>
			<div style={{ marginBottom: 5, textAlign: 'center', fontFamily: 'Arial', fontSize: 13 }}>
				Fini le taxi plus cher que l'avion
			</div>

			<img className={'reservation__image'} src={groupImage}></img>
		</div>
	);
}