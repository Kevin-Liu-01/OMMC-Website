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

import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div class={dark ? "dark" : ""}>
      <Routes>
        <Route
          path="/"
          element={<Main dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="sample"
          element={<Sample dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="sponsors"
          element={<Sponsors dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="staff"
          element={<Staff dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="leaderboard"
          element={<Leaderboard dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="testdocs"
          element={<TestDocs dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="portal"
          element={<Portal dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="retreival"
          element={<Retreival dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="problem-of-the-month"
          element={<Problem dark={dark} setDark={setDark} />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
