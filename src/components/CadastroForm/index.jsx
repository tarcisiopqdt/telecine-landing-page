import React from 'react'

const CadastroForm = () => (
    <div className="wrapper-form">
        <form>
            <input type="text" placeholder="nome" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="cpf" />
            <input type="text" placeholder="data de nascimento" />
            <input type="text" placeholder="estado" />
            <input type="text" placeholder="cidade" />
            <input type="submit" value="Enviar meus dados &#8594;" 
              onClick={(e) => {e.preventDefault()
                alert("Dados enviados!")
               }} />
        </form>
    </div>
)

export default CadastroForm;