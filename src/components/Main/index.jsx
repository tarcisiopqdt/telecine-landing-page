import React from 'react'

import Carousel from './Carousel/index'
import Devices from './Devices/index'

 const Main = (props) => (
    <main className='main'>
        <Carousel populares={props.populares}/>
        <div className="part-3">
            <Devices />
        </div>

    </main>
)

export default Main