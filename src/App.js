import "./App.css";
import Main from "./Pages/Main.tsx";
import Footer from "./Reusable-Elements/Footer.js";
import Sample from "./Pages/Sample.tsx";
import Sponsors from "./Pages/Sponsors.tsx";
import Staff from "./Pages/Staff.tsx";
import Leaderboard from "./Pages/Leaderboard.tsx";
import TestDocs from "./Pages/TestDocs.tsx";
import Portal from "./Portal/Portal.js";
import Retreival from "./Portal/Retreival.js";
import Problem from "./Pages/Problem.tsx";

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
