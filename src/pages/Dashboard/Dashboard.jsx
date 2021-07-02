import { useState, useEffect } from 'react';
import '../Dashboard/dashboard.css'
import Header from '../../components/Header/Header.jsx';
import Title from '../../components/Title/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'
import Modal from '../../components/Modal/Modal';
import firebase from '../../services/firebaseConnection';


export default function Dashboard() {
  const [chamados, setChamados] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const listRef = firebase.firestore().collection('chamados').orderBy('created', 'desc').limit(5)
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDocs, setLastDocs] = useState()

  const [showPostModal, setShowPostModal] = useState(false)
  const [detail, setDetails] = useState()

  useEffect(() => {

    loadChamados()

    return () => {

    }
  }, [])

  async function loadChamados() {
    await listRef
      .get()
      .then(snapshot => {
        updateState(snapshot)
      })
      .catch(err => {
        console.log('Deu algum erro ', err)
        setLoadingMore(false)
      })

    setLoading(false)
  }

  async function updateState(snapshot) {
    const isCollectionEmpty = snapshot.size === 0;

    if (!isCollectionEmpty) {
      let lista = [];

      snapshot.forEach(doc => {
        lista.push({
          id: doc.id,
          assunto: doc.data().assunto,
          cliente: doc.data().cliente,
          clienteId: doc.data().clienteId,
          complemento: doc.data().complemento,
          created: doc.data().created,
          createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
          status: doc.data().status,
          userId: doc.data().userId
        })
      })

      const lastDoc = snapshot.docs[snapshot.docs.length - 1]
      setChamados(chamados => [...chamados, ...lista])
      setLastDocs(lastDoc)
    } else {
      setIsEmpty(true)
    }

    setLoadingMore(false)
  }

  if (loading) {
    return (
      <div>
        <Header />
        <div className="content">
          <Title name="Atendimentos">
            <FiMessageSquare size={25} />
          </Title>
          <div className="container dashboard">
            <span>Buscando Chamados...</span>
          </div>

        </div>
      </div>
    )
  }

  async function handleMore() {
    setLoadingMore(true)
    await listRef.startAfter(lastDocs).limit(5)
      .get()
      .then(snapshot => {
        updateState(snapshot)
      })
  }

  function tooglePostModal(item) {
    setShowPostModal(!showPostModal)
    setDetails(item)
  }

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
                {chamados.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td data-label="Cliente">{item.cliente}</td>
                      <td data-label="Assunto">{item.assunto}</td>
                      <td data-label="Status">
                        <span className="badge" style={{ background: item.status === 'Aberto' ? '#5cb85c' : '#999' }}>{item.status}</span>
                      </td>
                      <td data-label="Cadastro">{item.createdFormated}</td>
                      <td data-label="#">
                        <button className="action" style={{ backgroundColor: '#3583f6' }} onClick={() => tooglePostModal(item)}>
                          <FiSearch color="#fff" size={17} />
                        </button>
                        <Link className="action" style={{ backgroundColor: '#f6a935' }} to={`/new/${item.id}`}>
                          <FiEdit2 color="#fff" size={17} />
                        </Link>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
            {loadingMore && <h3 style={{ textAlign: 'center', marginTop: 15 }} ></h3>}
            {!loadingMore && !isEmpty && <button className="btn-more" onClick={ () => handleMore()}>Buscar Mais</button>}

          </>
        )}
      </div>
      {showPostModal && (
        <Modal
          conteudo={detail}
          close={tooglePostModal}
        />

      )}

    </div>
  )
}