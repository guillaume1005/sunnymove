import React, {useState} from 'react' ;
import TextInput from '../../components/TextInput';
import { labels } from '../../Common/AppTexts';
import Button from '../../components/Button';
import { tsPropertySignature } from '@babel/types';
import { Images } from '../../Common/Images';

export default function Login (props) {

    const {pending, logUser} = props ;
    const [loginData, setLoginData] = useState({}) ;

    return (
        <div className="p-col-12 p-md-6 p-lg-4 p-shadow-4">
            <div style={{padding:20, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <img style={{}} alt={"logo"} src={Images.logo}/>
            </div>
            <div className="p-md-12 p-mb-10">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <TextInput value={loginData.username} onChange={(e) => setLoginData({username: e.target.value})} placeholder={labels.username} />
                </div>
            </div>

            <div className="p-md-12">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <TextInput value={loginData.password} onChange={(e) => setLoginData({password: e.target.value})} placeholder={labels.password} />
                </div>
            </div>
            <div className='p-col-12 p-mt-10 p-d-flex d-flex-row p-ai-right p-jc-right'>
                <Button className='p-offset-8 p-col-4' label="Connectez-vous" onClick={()=> logUser(loginData)} icon={pending ? "pi pi-spin pi-spinner" : null} iconPos="right"  />
            </div>
        </div>
    )
}