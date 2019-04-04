import React from 'react'
import { Link } from 'react-router-dom'

const CadastroForm = () => (
    <div className="wrapper-form">
        <form>
            <input type="text" placeholder="nome" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="cpf" />
            <input type="text" placeholder="data de nascimento" />
            <input type="text" placeholder="estado" />
            <input type="text" placeholder="cidade" />
          
            <Link className='btn-assine' to="/cadastro/ok">ENVIAR MEUS DADOS</Link>

        </form>
    </div>
)

export default CadastroForm;