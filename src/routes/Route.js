import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  componenent: Componenent,
  isPrivate,
  ...rest 
}){
  const loading = false;
  const signed = true;

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="/dashboard" />
  }

  return(
    <Route 
      {...rest}
      render={ props => (
        <Componenent {...props} />
      )}
    />
  )
}