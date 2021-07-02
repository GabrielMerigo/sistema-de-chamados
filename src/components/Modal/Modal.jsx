import './modal.css';
import { FiX } from 'react-icons/fi'

export default function Modal({conteudo, close}){
  return(
    <div className="modal" >
      <div className="container">
        <button className="close" onClick={close} >
          <FiX size={23} color="#fff"/>
        </button>
        <div>
          <h2>Detalhes do Chamado</h2>

          <div className="row">
            <span>
              Cliente: <a href="">{conteudo.cliente}</a>
            </span>
          </div>

          <div className="row">
            <span>
              Assunto: <a href="">{conteudo.assunto}</a>
            </span>
            <span>
              Cadastrado Em: <a href="">{conteudo.createdFormated}</a>
            </span>
          </div>

          <div className="row">
            <span>
              Status: <a style={{ color: '#fff', background: conteudo.status === 'Aberto' ? '#5cb85c' : '#999' }} >{conteudo.status}</a>
            </span>
          </div>

          {conteudo.complemento !== '' && (
            <>
              <h3>Complemento</h3>

              <p>{conteudo.complemento}</p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}