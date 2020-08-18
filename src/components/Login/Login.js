import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {auth, provider} from '../../firebase'


function Login() {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
         .catch ((error) =>{
             console.error(error.message);
         })
        
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://raincake.com.br/wp-content/themes/raincake-2018/images/rain-preto.svg" alt=""></img>
                <h1> Entre no Slack da Raincake</h1>
                <p>Bolinho de chuva always</p>
                <Button onClick={signIn}>Entre com o Google</Button>
            </div>  

        </div>
    )
}

export default Login
