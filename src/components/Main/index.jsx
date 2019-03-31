import React , {Component} from 'react'

import Carousel from './Carousel/index'
import Devices from './Devices/index'


export default class Main extends Component{
    
    render(){
        return (
            <main className='main'>
                <Carousel />
                <Devices />
            </main>
        )
    }
}