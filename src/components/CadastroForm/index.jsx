import React from 'react'

const CadastroForm = () => (
    <div className="wrapper-form">
        <form action="cadastro/ok" method="get">
            <input type="text" placeholder="nome" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="cpf" />
            <input type="text" placeholder="data de nascimento" />
            <input type="text" placeholder="estado" />
            <input type="text" placeholder="cidade" />
            <input type="submit" value="Enviar meus dados &#8594;" />
        </form>
    </div>
)

export default CadastroForm;