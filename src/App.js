import React from 'react'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignUp from './containers/SignUp'
import Login from './containers/Login'
import Edit from './containers/Edit'
import Profile from './containers/Profile'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUp}/>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/edit' component={Edit} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
