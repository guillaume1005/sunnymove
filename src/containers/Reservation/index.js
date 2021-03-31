import React, {useState} from 'react' ;
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';

export default function Reservation (props) {

    const [depart,setDepart] = useState('') ;
    const [arriving, setArriving] = useState('') ;
    const [cities, setCities] = useState([{ label: "Tunis", value: 'Tunis' }, { label: "Tunis", value: 'Tunis' }])
    const [departDate, setDepartDate] = useState() ;
    const [arrivingDate, setArrivingDate] = useState() ;



    return (
        <div style={{backgroundColor:"#FFF", borderRadius:20, padding:20, width:'60%'}}>
            
            <div className="p-inputgroup" style={{marginBottom:5}}>
                <span className="p-inputgroup-addon">Depart</span>
                <Dropdown className="p-inputtext-lg"  style={{width:'100%', backgroundColor:'#efefef'}} value={depart} options={cities} onChange={(e) => setDepart(e.value)} optionLabel="label" filter  filterBy="label" placeholder="Ville ou Gare"/>
            </div>
            <div className="p-inputgroup" style={{marginBottom:5}}>
                <span className="p-inputgroup-addon">Arrivée</span>
                <Dropdown className="p-inputtext-lg" style={{width:'100%', backgroundColor:'#efefef'}} value={arriving} options={cities} onChange={(e)=>setArriving(e.value)} optionLabel="label" filter  filterBy="label" placeholder="Ville ou Gare"/>
            </div>
            <div style={{marginTop:30, marginBottom:5}} className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-calendar"></i>
                    </span>                 
                    <Calendar  className="p-inputtext-lg" placeholder='Aller' style={{width:'100%', backgroundColor:'#efefef'}}  value={departDate} onChange={(e) => setDepartDate(e.value)}  />
            </div>
            <div className="p-inputgroup" style={{marginBottom:5}}>
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-calendar"></i>
                    </span>           
                    <Calendar className="p-inputtext-lg" placeholder='Retour' style={{width:'100%', backgroundColor:'#efefef'}}  value={arrivingDate} onChange={(e) => setArrivingDate(e.value)}  />
            </div>
            <div style={{marginTop:30}}>
                <Button  style={{ width:'100%', fontSize:20, backgroundColor:"#688C67", color:'#fff', borderColor:"#688C67"}} label='Rechercher'></Button>
            </div>
        </div>
    )
}