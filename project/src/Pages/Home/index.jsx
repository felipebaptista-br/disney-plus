import React from 'react';
import Header from "../../Components/Header";
import WelcomeImage from "../../Images/disney+_Combo.png"

import './style.css';

export default function Home() {
    
    return(
        <main id="main_Home">
             <Header />
            <div className='section-home section-column bunner-welcome'>
                <section id="welcome_Home">
                    <h1>Com o Combo+, você pode aproveitar o Disney+ e o Star+ por um preço único.</h1>
                    <img className='image-welcome' src={WelcomeImage}/>
                    <button> 
                        ASSINE POR R$ 45,90*
                    </button>
                    <p>*O preço pode variar caso a assinatura seja feita através de outras plataformas.</p>
                    <a href="https://www.disneyplus.com/pt-br/sign-up?type=standard">Assinar somente o Disney+</a>
                    <p>R$ 27,90/mês* ou R$ 279,90/ano à vista*</p>
                </section>
            </div>
            <div className='section-home'>

            </div>
            <div className='section-home'>

            </div>
            <div className='section-home'>

            </div>
            <div className='section-home'>

            </div>
        </main>
    )
}