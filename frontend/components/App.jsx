import React from 'react';
import { Provider, Redirect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';





const App = () => (
  <div className="mainDiv">
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
