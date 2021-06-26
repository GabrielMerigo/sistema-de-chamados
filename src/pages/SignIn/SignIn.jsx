import { useState } from 'react';
import '../SignIn/Sign.css'
import Logo from'../../assets/logo.png'
import { Link } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="container-center">
      <div className="login">

        <div className="login-area">
          <img src={Logo} alt="Logo do sistema" />
        </div>

        <form>
          <h1>Entrar</h1>
          <input type="email" placeholder="Email@email.com" />
          <input type="password" placeholder="********" />
          <button type="submit">Acessar</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignIn;
