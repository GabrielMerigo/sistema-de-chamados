import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import Avatar from '../../assets/avatar.png';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

import { Link } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext)

  return (
    <div className="sidebar">
      <div>
        <img src={user.avatarUrl === null ? Avatar : user.avatarUrl} alt="Foto Avatar" />
      </div>
      <Link to="/dashboard">
        <FiHome color="#bbb" size={24} />
        Chamados
      </Link>
      <Link to="/customers" >
        <FiUser color="#bbb" size={24} />
        Clientes
      </Link>
      <Link to="/profile" >
        <FiSettings color="#bbb" size={24} />
        Configurações
      </Link>
    </div>
  )
}

export default Header