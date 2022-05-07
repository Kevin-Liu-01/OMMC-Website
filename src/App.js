import './App.css';
import Main from './Main.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Sample from './Sample.js'
import Banner from './Banner.js'

import { Routes, Route } from "react-router-dom";

function App() {

  
    return (<>
    
    
      <Navbar></Navbar>
      <Banner></Banner>

       <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="sample" element={<Sample />}></Route>

      </Routes> 
      <Footer></Footer>

      </>
      
      
      )
}


        

export default App;
