import React , {Component} from 'react'

import Carousel from './Carousel/index'
import Devices from './Devices/index'
import Footer from './Footer/index'

export default class Main extends Component{
    
    render(){
        return (
            <main className='main'>
                <Carousel />
                <Devices />
                <Footer />
            </main>
        )
    }
}