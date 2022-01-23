import React from 'react'

import './style.css';

export default function Header() {
    
    return(
        <main id="main_Header">
            <img id='logo_Disney' src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="" />
            <section id="logo_Buttons">
                <button className='logo-button-generic button-signature'>
                    <a href="https://www.disneyplus.com/pt-br/sign-up?type=standard">ASSINE AGORA</a>
                </button>
                <button className='logo-button-generic button-login'> 
                    ENTRAR
                </button>
            </section>
        </main>
    )
}