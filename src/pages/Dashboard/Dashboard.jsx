import { useState } from 'react';
import '../Dashboard/dashboard.css'
import Header from '../../components/Header/Header.jsx';
import Title from '../../components/Title/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [chamados, setChamados] = useState([1]);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Atendimentos">
          <FiMessageSquare size={25} />
        </Title>

        {chamados.length === 0 ? (
          <div className="container dashboard">
            <span>Nenhum Chamado Registrado...</span>
            <Link to="/new" className="new">
              <FiPlus size={25} color="#fff" />
              Novo Chamado
            </Link>
          </div>
        ) : (
          <>
            <Link to="/new" className="new">
              <FiPlus size={25} color="#fff" />
              Novo Chamado
            </Link>
            <table>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cadastrado Em</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Cliente">Gabriel</td>
                  <td data-label="Assunto">Falha na Comunicação</td>
                  <td data-label="Status">
                    <span className="badge" style={{ background: '#5cb85c' }}>Em Aberto</span>
                  </td>
                  <td data-label="Cadastro">20/06/20201</td>
                  <td data-label="#">
                    <button  className="action" style={{backgroundColor: '#3583f6'}}>
                      <FiSearch color="#fff" size={17} />
                    </button>
                    <button  className="action" style={{backgroundColor: '#f6a935'}}>
                      <FiEdit2 color="#fff" size={17} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  )
}