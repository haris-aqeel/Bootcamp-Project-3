import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Main from './ControllerComponent'
import { BrowserRouter as Router} from "react-router-dom";
import GlobalProvider from '../src/States/GlobalState'
import reducer , {initialState} from '../src/States/reducer'

function App() {
  return (
    <Router>  
      <GlobalProvider reducer={reducer} initialState = {initialState}>
        <Main />    {/* Comprises of a Drawer & Router Methods */}
      </GlobalProvider>
    </Router>
  );
}

export default App;
