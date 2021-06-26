import { Switch } from 'react-router-dom';
import Route from '../routes/Route'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" componenent={SignIn} />
      <Route exact path="/register" componenent={SignUp} />
    </Switch>
  )
}