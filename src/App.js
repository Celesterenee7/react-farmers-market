import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProduceList from "./components/ProduceList";

function App() {
  return (
    <div>
      <NavBar />
    <div className='container'>
      <Switch>
       <Route exact path='/' component={Body} />
       <Route path='/producelist' component={ProduceList} />
     </Switch>
    </div>
    </div>
  );
}

export default App;
