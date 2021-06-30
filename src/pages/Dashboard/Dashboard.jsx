import { useState } from 'react';
import '../Dashboard/dashboard.css'
import Header from '../../components/Header/Header.jsx';
import Title from '../../components/Title/Title';
import { FiMessageSquare, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Atendimentos">
          <FiMessageSquare size={25} />
        </Title>

        <div className="container dashboard">
          <span>Nenhum Chamado Registrado...</span>
          <Link to="/new" className="new">
            <FiPlus size={25} color="#fff" />
            Novo Chamado
          </Link>
        </div>
      </div>
    </div>
  )
}