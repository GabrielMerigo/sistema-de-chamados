import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import '../New/new.css'
import { FiPlusCircle } from 'react-icons/fi'
import { useState } from "react";

export default function New() {
  function handleRegister(e){
    e.preventDefault()
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Novo chamado">
          <FiPlusCircle size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Cliente</label>
            <select>
              <option key={1} value={1}>Gabriel</option>              
              <option key={1} value={1}>João</option>              
            </select>

            <label>Assunto</label>
            <select>
              <option value="suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input type="radio" name="radio" value="aberto"/>
              <span>Em Aberto</span>

              <input type="radio" name="radio" value="progresso"/>
              <span>Progresso</span>

              <input type="radio" name="radio" value="atendido"/>
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea type="text" placeholder="Descreva seu problema (opcional)"></textarea>

            <button type="submit" >Registrar</button>

          </form>
        </div>

      </div>
    </div>
  )
}