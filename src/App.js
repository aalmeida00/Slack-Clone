import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Chat from './components/Chat/Chat.js'
import Login from './components/Login/Login.js'



function App() {

  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
          
        ): (
          <>
          <Header />
          <div className="app__body">
            <Sidebar />
            
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </div>
          </>
      )}

      </Router>
    </div>
  );
}

export default App;
