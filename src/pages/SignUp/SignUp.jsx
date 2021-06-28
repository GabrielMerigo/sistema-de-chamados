import { useState, useContext } from 'react';
import Logo from'../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function SignUp() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()

  const { signUp, loadingAuth } = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()
    
    if(name === undefined && email === undefined && password === undefined){
      toast.error('Preencha os campos nome, email e senha.')
      return
    }
    
    signUp(email, password, name)
  }

  return (
    <div className="container-center">
      <div className="login">

        <div className="login-area">
          <img src={Logo} alt="Logo do sistema" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <ToastContainer/>
          <input type="name" placeholder="Ex: José Soares" value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder="Email@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
        </form>

        <Link to="/">Já possui uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;
