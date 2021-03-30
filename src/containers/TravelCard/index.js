import React from 'react' ;
import Button from '../../components/Button';
import { Images } from '../../Common/Images';
import { Link } from 'react-router-dom';

export default function TravelCard (props) {

    return (
        <div style={{borderRadius:20, backgroundColor:'#FFF', display:'flex', flex:1}}>
            <div style={{}}>
                <img style={{borderTopLeftRadius:20,borderBottomLeftRadius:20, height:'100%'}} src={Images.plage}/>    
            </div>
            <div style={{flex:1, justifyContent:'center', alignItems:"center", display:'flex', flexDirection:'column'}}>
                <p style={{fontSize:34}}>
                    Aéroport {props.title} - Centre-Ville
                </p>
                <div style={{flex:1, display : 'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{marginRight:30}}>
                        <p style={{color:'#b51742'}}>Le voyage dès 10€/pers</p>
                    </div>
                    <Link to='/reservation'>
                    <div>
                        
                            <Button style={{borderRadius:30, fontSize:20, backgroundColor:'#b51742', borderColor:"#b51742"}} label='Je réserve'/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}