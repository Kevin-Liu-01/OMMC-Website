import './App.css';
import Main from './Main.js'
import Navbar from './Navbar.js'

import { Routes, Route } from "react-router-dom";

function App() {

  
    return (<>
    
    
      <Navbar></Navbar>
       <Routes>
      <Route path="/" element={<Main />}></Route>
      </Routes> 
      </>
      
      
      )
}


        

export default App;
