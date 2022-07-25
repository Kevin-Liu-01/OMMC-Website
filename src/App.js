import "./App.css";
import Main from "./Pages/Main.js";
import Footer from "./Reusable-Elements/Footer.js";
import Sample from "./Pages/Sample.js";
import Sponsors from "./Pages/Sponsors.js";
import Staff from "./Pages/Staff.js";
import Leaderboard from "./Pages/Leaderboard.js";
import TestDocs from "./Pages/TestDocs.js";
import Portal from "./Portal/Portal.js";
import Retreival from "./Portal/Retreival.js";
import Problem from "./Pages/Problem.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="sample" element={<Sample />}></Route>
        <Route path="sponsors" element={<Sponsors />}></Route>
        <Route path="staff" element={<Staff />}></Route>
        <Route path="leaderboard" element={<Leaderboard />}></Route>
        <Route path="testdocs" element={<TestDocs />}></Route>
        <Route path="portal" element={<Portal />}></Route>
        <Route path="retreival" element={<Retreival />}></Route>
        <Route path="problem-of-the-month" element={<Problem />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
