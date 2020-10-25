import React, {useState} from 'react' ;
import Login from '../containers/Login';

export default function LoginView () {


    const [pending, setPending] = useState(false)
    const logUser = (userData) => {
        setPending(true) ;

    }
    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{borderWidth:1, borderStyle:'solid', minHeight:'100vh'}}>
            <Login pending={pending} logUser={logUser}/>
        </div>
    )
}