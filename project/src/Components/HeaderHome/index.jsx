import React from 'react'
import { useNavigate } from "react-router-dom";

import './style.css';

export default function Header() {
    let params = useNavigate()

    async function goLink() {
        window.location.href = "https://www.disneyplus.com/pt-br/sign-up?type=standard"
    }

    function goLogin() {
        params("/login")
    }

    return (
        <main id="main_Header">
            <img id='logo_Disney' src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" />
            <section id="logo_Buttons">
                <button onClick={goLink} className='logo-button-generic button-signature'>
                    ASSINE AGORA
                </button>
                <button onClick={goLogin} className='logo-button-generic button-login'>
                    ENTRAR
                </button>
            </section>
        </main>
    )
}