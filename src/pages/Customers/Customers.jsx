import './customers.css';
import { useState } from 'react'
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import firebase from '../../services/firebaseConnection';
import { FiUser } from 'react-icons/fi'
import { toast } from 'react-toastify';

export default function Customers() {
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')

  async function handleAdd(e) {
    e.preventDefault()

    if (nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
     await firebase.firestore().collection('customers')
      .add({
        nome: nomeFantasia,
        cnpj: cnpj,
        endereco: endereco
      })
      .then(() => {
        setEndereco('')
        setCnpj('')
        setNomeFantasia('')
        toast.info('Empresa Cadastrada com Sucesso')
      }).catch(error => {
        toast.error('Ops! Ocorreu algum erro.')
      })
    }else{
      toast.error('Preecha todos os dados')
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome Fantasia:</label>
            <input type="text" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />

            <label>CNPJ:</label>
            <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

            <label>Endereco:</label>
            <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}