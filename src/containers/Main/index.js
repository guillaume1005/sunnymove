import React from 'react' ;
import Reservation from '../Reservation';
import TravelCard from '../TravelCard';
import SocialMedias from '../../components/SocialMedias';

export default function Main (props) {

    return (
        <div>
           <div>
                <p style={{textAlign:'center', fontSize:30, color:"grey"}}>
                    Nos transports depuis les aéroports
                </p>
           </div>
           <div className='p-d-flex'>
                <div className='p-col-5' style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
                    <Reservation/>
                    <div style={{marginBottom:20}}>
                    </div>
                    <SocialMedias/>
                </div>
                <div className='p-col-7'>
                    <div style={{marginBottom:30}}>
                        <TravelCard/>
                    </div>
                    <div>
                        <TravelCard/>
                    </div>
                </div>
           </div>
        </div>
    )
}