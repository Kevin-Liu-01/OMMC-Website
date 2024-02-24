import "./App.css";
import Main from "./Pages/Main.tsx";
import Sample from "./Pages/Documents/Sample.tsx";
import Sponsors from "./Pages/Sponsors.tsx";
import Staff from "./Pages/Staff.tsx";
import Leaderboard22 from "./Pages/Leaderboard22.tsx";
import Leaderboard23 from "./Pages/Leaderboard23.tsx";
import REPS from "./Pages/REPS.tsx";
import NotFound from "./Pages/Error.tsx";
import Sponsorship from "./Pages/Sponsorship.tsx";

import Test22 from "./Pages/Documents/Test_22.tsx";
import Test23 from "./Pages/Documents/Test_23.tsx";

import POTD from "./Pages/POTD.tsx";
import AMC from "./Pages/Documents/AMC.tsx";

import Footer from "./Components/Footer.js";

import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(JSON.parse(window.localStorage.getItem("mode")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mode", dark);
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
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
          path="2022-leaderboard"
          element={<Leaderboard22 dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="2023-leaderboard"
          element={<Leaderboard23 dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="2022-documents"
          element={<Test22 dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="2023-documents"
          element={<Test23 dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="ommc-amc"
          element={<AMC dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="problem-of-the-month"
          element={<POTD dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="reps"
          element={<REPS dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="*"
          element={<NotFound dark={dark} setDark={setDark} />}
        ></Route>

        <Route
          path="sponsorship_prospectus"
          element={<Sponsorship dark={dark} setDark={setDark} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
