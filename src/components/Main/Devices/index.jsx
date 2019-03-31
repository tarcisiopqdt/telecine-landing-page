import React from 'react'
import deviceSmart from '../../../assets/imgs/smart-devices.jpg'
import deviceTv from '../../../assets/imgs/smart-tv.jpg'

const Devices = () => {
    return (
        <section className='devices'>
            <div className='container'>
                <h1 className='devices-header'>Dispositivos</h1>
                <h1>O melhor catálogo. Em todas as telas.</h1>
                <ul className='cards-container'>
                    <li className="card">
                        <picture>
                            <source media="(min-width: )" srcSet={deviceSmart} />
                            <div className='img-container'>
                            <img className='img-device' src={deviceSmart} alt="" />
                            </div>
                        </picture>

                        <h3>Assista na TV</h3>

                        <ul className='devices-suported'>
                            <li>&#10003; Smart TVs</li>
                            <li>&#10003; Xbox One</li>
                            <li>&#10003; Chomecast</li>
                        </ul>
                    </li>
                    <li className="card">
                        <picture>
                            <source media="(min-width: )" srcSet={deviceTv} />
                            <div className='img-container'>
                                <img className='img-device' src={deviceTv} alt="Smart TVs" />
                            </div>
                        </picture>

                        <h3>Assista na TV</h3>
                        <ul className='devices-suported'>
                            <li>&#10003; Smart TVs</li>
                            <li>&#10003; Xbox One</li>
                            <li>&#10003; Chomecast</li>
                        </ul>

                    </li> 
                    <li className="card">
                        <picture>
                            <source media="(min-width: )" srcSet={deviceTv} />
                            <div className='img-container'>
                                <img className='img-device' src={deviceTv} alt="Smart TVs" />
                            </div>
                        </picture>

                        <h3>Ou onde quiser</h3>
                        <ul className='devices-suported'>
                            <li>&#10003; Android</li>
                            <li>&#10003; IOS</li>
                            <li>&#10003; PC</li>
                        </ul>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Devices;