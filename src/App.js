import './App.css';
import Main from './Main.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Sample from './Sample.js'
import Banner from './Banner.js'
import Sponsors from './Sponsors.js'
import Staff from './Staff.js'
import Leaderboard from './Leaderboard.js'
import TestDocs from './TestDocs.js'
import Portal from './Portal.js'
import Retreival from './Retreival.js'


import { Routes, Route } from "react-router-dom";

function App() {

  
    return (<>
    
    
      <Navbar></Navbar>
      <Banner></Banner>

       <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="sample" element={<Sample />}></Route>
      <Route path="sponsors" element={<Sponsors/>}></Route>
      <Route path="staff" element={<Staff/>}></Route>
      <Route path="leaderboard" element={<Leaderboard/>}></Route>
      <Route path="testdocs" element={<TestDocs/>}></Route>
      <Route path="portal" element={<Portal/>}></Route>
      <Route path="retreival" element={<Retreival/>}></Route>

      </Routes> 
      <Footer></Footer>

      </>
      
      
      )
}


        

export default App;
