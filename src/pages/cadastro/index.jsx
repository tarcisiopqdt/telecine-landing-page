import React from 'react'

import Title from '../../components/Title/index'
import CadastroForm from '../../components/CadastroForm/index'
import Footer from '../../components/Footer/index'

const Cadastro = () => (
    <>  
        <Title title="Para começar a usar seus 7 dias grátis precisamos de alguns dados"/>
        <CadastroForm />
        <Footer className=""/>
    </>
)

export default Cadastro;