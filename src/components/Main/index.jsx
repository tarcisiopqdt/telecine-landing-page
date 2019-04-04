import React from 'react'

import Carousel from './Carousel/index'
import Devices from './Devices/index'

const Main = (props) => (
    <main className='main'>
        <Carousel populares={props.populares} />
        <Devices devices={props.devices}/>
    </main>
)

export default Main