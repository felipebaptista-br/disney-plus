import React from 'react';
import Header from "../../Components/Header";
import WelcomeImage from "../../Images/disney+_Combo.png"
import WelcomeSection1 from "../../Images/welcome_section1.png";
import WelcomeSection2 from "../../Images/welcome_section2.jpeg";
import IconTV from "../../Images/TV.png";
import IconComputer from "../../Images/Computer.png";
import IconPhone from "../../Images/Phone.png";
import IconGames from "../../Images/Games.png";

import './style.css';

export default function Home() {

    async function goLink() {
        window.location.href = "https://www.disneyplus.com/pt-br/sign-up?type=bundle"
    }
    
    return(
        <main id="main_Home">
             <Header />
            <div className='section-home section-column bunner-welcome'>
                <section id="welcome_Home">
                    <h1>Com o Combo+, você pode aproveitar o Disney+ e o Star+ por um preço único.</h1>
                    <img className='image-welcome' src={WelcomeImage}/>
                    <button onClick={goLink}> 
                        ASSINE POR R$ 45,90*
                    </button>
                    <p>*O preço pode variar caso a assinatura seja feita através de outras plataformas.</p>
                    <a href="https://www.disneyplus.com/pt-br/sign-up?type=standard">Assinar somente o Disney+</a>
                    <p>R$ 27,90/mês* ou R$ 279,90/ano à vista*</p>
                </section>
            </div>
            <div className='section-home'>
                <img src={WelcomeSection1} className='image-section-division' />
                <section className='welcome-content-section'>
                    <h3>Assista do seu jeito</h3>
                    <p>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
                </section>
            </div>
            <div className='section-home'>
                <section className='welcome-content-section'>
                    <p>Só o Combo+ oferece Disney+ e Star+ juntos para você ter acesso ilimitado a filmes, séries de sucesso e esportes ao vivo com a ESPN, para ver onde e como quiser.</p>
                    <button onClick={goLink}>ASSINAR O COMBO+</button>
                </section>
                <img src={WelcomeSection2} className='image-section-division' />
            </div>
            <div className='section-home background-image'>
                <article className='division'></article>
                <article className='division'>
                    <h3>Baixe filmes e séries</h3>
                    <p>Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.</p>
                </article>
            </div>
            <div className='section-home section-column '>
                <div id="device_Section">
                    <h1 className='device-title'>Disponível nos seus dispositivos favoritos</h1>
                    <section id='division_Device'>
                        <article className='device-section'>
                            <img src={IconTV} className='device-icon'/>
                            <h3>TV</h3>
                            <div className='device-content'>
                                <p>Amazon Fire TV</p>
                                <p>Android TV</p>
                                <p>Apple TV</p>
                                <p>Chromecast</p>
                                <p>TVs LG</p>
                                <p>Roku</p>
                                <p>Samsung</p>
                            </div>
                        </article>
                        <article className='device-section'>
                            <img src={IconComputer} className='device-icon'/>
                            <h3>Computador</h3>
                            <div className='device-content'>
                                <p>Chrome OS</p>
                                <p>MacOS</p>
                                <p>PC Windows</p>
                            </div>
                        </article>
                        <article className='device-section'>
                            <img src={IconPhone} className='device-icon'/>
                            <h3>Celulares e tablets</h3>
                            <div className='device-content'>
                                <p>Tablets Amazon Fire</p>
                                <p>Celulares e Tablets Android</p>
                                <p>iPhone e iPad</p>
                            </div>
                        </article>
                        <article className='device-section'>
                            <img src={IconGames} className='device-icon'/>
                            <h3>Videogames</h3>
                            <div className='device-content'>
                                <p>Ps4</p>
                                <p>Ps5</p>
                                <p>Xbox One</p>
                                <p>Xbox Series X</p>
                                <p>Xbox Series S</p>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </main>
    )
}