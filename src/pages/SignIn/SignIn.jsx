import { useState, useContext } from 'react';
import '../SignIn/Sign.css';
import Logo from'../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn, loadingAuth } = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()

    if(email === undefined && password === undefined){
      toast.error('Preecha os campos de e-mail e senha.')
      return
    }
    
    signIn(email, password)
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
          <input type="email" placeholder="Email@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignIn;
