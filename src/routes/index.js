import { Switch } from 'react-router-dom';
import Route from '../routes/Route'

import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Profile from '../pages/Profile/Profile';
import Customers from '../pages/Customers/Customers';
import New from '../pages/New/New';


export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" componenent={SignIn} />
      <Route exact path="/register" componenent={SignUp} />

      <Route exact path="/profile" componenent={Profile} isPrivate />
      <Route exact path="/dashboard" componenent={Dashboard} isPrivate/>
      <Route exact path="/customers" componenent={Customers} isPrivate />
      <Route exact path="/new" componenent={New} isPrivate />
      <Route exact path="/new/:id" componenent={New} isPrivate/>
    </Switch>
  )
}