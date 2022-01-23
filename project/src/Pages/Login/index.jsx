import React from 'react';
import { useNavigate } from "react-router-dom";

import './style.css';

export default function Login() {
    let params =  useNavigate()

    function goPlatform() {
        params("/platform")
    }
    
    return(
        <main id="main_Login">
            <div id="content_Login">
                <img className='logo-login' src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"/>
                <section id='content_Form'>
                    <h3>Use o seu e-mail para entrar</h3>
                    <form>
                        <input type="email" className='input' placeholder='E-mail' required />
                        <input type="password" className='input' placeholder='Senha' required/>
                        <input type="submit"  className='submit' value="CONTINUAR" onClick={goPlatform} />
                    </form>
                </section>
            </div>
        </main>
    )
}