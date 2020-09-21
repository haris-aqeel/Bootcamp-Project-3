import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Main from './ControllerComponent'
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>  
      <Main />    {/* Comprises of a Drawer & Router Methods */}
    </Router>
  );
}

export default App;
