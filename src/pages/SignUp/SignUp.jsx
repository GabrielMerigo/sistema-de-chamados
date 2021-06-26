import { useState, useContext } from 'react';
import Logo from'../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

function SignUp() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()

  const { signUp } = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()
    
    if(name !== '' && email !== '' && password !== ''){
      alert('clicou')
      signUp(email, password, name)
    }
  }

  return (
    <div className="container-center">
      <div className="login">

        <div className="login-area">
          <img src={Logo} alt="Logo do sistema" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="name" placeholder="Ex: José Soares" value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder="Email@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já possui uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;
