import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { useContext } from 'react'; 

export default function RouterWrapper({
  componenent: Componenent,
  isPrivate,
  ...rest
}) {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div></div>
    )
  }
  
  console.log(isPrivate)
  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }
  
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Componenent {...props} />
      )}
    />
  )
}