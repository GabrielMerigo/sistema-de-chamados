import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import '../New/new.css'
import { FiPlusCircle } from 'react-icons/fi'
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import { toast } from 'react-toastify'

export default function New() {

  const [loadCustomers, setLoadCustomers] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState(0);

  const [assunto, setAssunto] = useState('Suporte');
  const [status, setStatus] = useState('Aberto');
  const [complemento, setComplemento] = useState('');
  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function loadCustomers() {
      await firebase.firestore().collection('customers')
        .get()
        .then(snapshot => {
          let lista = [];
          snapshot.forEach(doc => {
            lista.push({
              id: doc.id,
              nomeFantasia: doc.data().nome
            })
          })

          if (lista.length === 0) {
            console.log('não achou empresa :(')
            setCustomers([{ id: '1', nomeFantasia: 'Freela' }])
            setLoadCustomers(false)
            return
          }

          setCustomers(lista)
          setLoadCustomers(false)

        })
        .catch(err => {
          console.log('deu algum erro')
          setLoadCustomers(false)
          setCustomers([{ id: '1', nomeFantasia: '' }])
        })
    }

    loadCustomers()

  }, [])

  async function handleRegister(e) {
    e.preventDefault()

    await firebase.firestore().collection('chamados')
      .add({
        created: new Date(),
        cliente: customers[customerSelected].nomeFantasia,
        clienteId: customers[customerSelected].id,
        assunto: assunto,
        status: status,
        complemento: complemento,
        userId: user.uid
      }).then(() => {
        toast.success('Chamado criado com sucesso.')
        setComplemento('')
        setCustomerSelected(0);
      }).catch(err => {
        toast.error('Ops, ao registrar... Tente mais tarde..')
        console.log(err)
      })
  }
  // Chamado quando troca o assunto
  function handleChangeSelect(e) {
    setAssunto(e.target.value)
  }

  //chamado quando troca o status
  function handleOptionChange(e) {
    setStatus(e.target.value)
  }

  function handleChangeCustomers(e) {
    setCustomerSelected(e.target.value)
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
            {loadCustomers ? (
              <input type="text" disabled value="Carregando Clientes..." />
            ) : (
              <select value={customerSelected} onChange={handleChangeCustomers} >
                {customers.map((customer, index) => {
                  return (
                    <option key={customer.id} value={index}>
                      {customer.nomeFantasia}
                    </option>
                  )
                })}
              </select>
            )}


            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
              <option value="suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === 'Aberto'}
              />
              <span>Em Aberto</span>

              <input
                type="radio"
                name="radio"
                value="progresso"
                onChange={handleOptionChange}
                checked={status === 'progresso'}
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="atendido"
                onChange={handleOptionChange}
                checked={status === 'atendido'}
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)"
              value={complemento}
              onChange={e => setComplemento(e.target.value)}
            >
            </textarea>

            <button type="submit">Registrar</button>

          </form>
        </div>

      </div>
    </div>
  )
}