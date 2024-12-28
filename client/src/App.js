import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Header from './Component/Header';
import Tamp from './Component/Tamp';
import Main from './Component/Main';
import FormHead from "./Component/Formhead"
import CenterTab from './Component/Tabs';
import Qus from './Component/Qus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/form/:id'
          element = {<><FormHead /><CenterTab/><Qus /></>}>
          </Route>
          <Route path='/'
          element= {<><Header /><Tamp/><Main /></>} />

        </Routes>
        
        </BrowserRouter>
      
    
    </div>
  );
}

export default App;
