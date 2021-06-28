import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/Header.jsx';

export default function Dashboard(){
  const { signOut } = useContext(AuthContext)


  return(
    <div>
      <Header/>
      <button onClick={() => signOut()}>Fazer Logout</button>
    </div>
  )
}