import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Innerpage from './components/Innerpage';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter basename="/anil/Team-work/March-2021/Bhavin/st-theme-23">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/innerpage'>
              <Innerpage />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  };
};

export default App;