import React from 'react'

import deviceTv from '../../../assets/imgs/smart-tv.jpg'

const Devices = (props) => {
    return (
        <section className='devices'>
            <div className='container'>
                <h1 className='devices-header'>Dispositivos</h1>
                <h2>O melhor catálogo. Em todas as telas.</h2>
                <ul className='cards-container'>


                    {props.devices.map((device, index) => {
                         {console.log(device)}
                        return (
                        <li key={index} className="card">
                            <picture>
                                <div className='img-container'>
                                    <img className='img-device' src={device.urlImg} alt={device.title} />
                                </div>
                            </picture>

                            <h3>{device.title}</h3>

                            <ul className='devices-suported'>
                                <li>&#10003; {device.list[0]}</li>
                                <li>&#10003; {device.list[1]}</li>
                                <li>&#10003; {device.list[2]}</li>
                            </ul>
                        </li>
                        )
                    }
                    )}

                </ul>
            </div>
        </section>
    )
}

export default Devices;