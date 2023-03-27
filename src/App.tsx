import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CodeTest from "./pages/CodeTest";
import LiveSession from "./pages/LiveSession";
import PastContest from "./pages/PastContest";
import LeaderBoard from "./pages/LeaderBoard";
import Profile from "./pages/Profile";
import Programming from "./pages/Programming";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import ChangePwd from "./pages/ChangePwd";
import { Navbar } from "./components/Navbar";
import LandingNav from "./components/LandingNav";

function App() {
  return (
    <div className="m-2 bg-[#1F1F1E]  min-w-screen">
      {/* replace bool with login validation */}

      {true ? <Navbar /> : <LandingNav />}
      <div className="px-2 mt-2">
        <Routes>
          {/* {true ? (
          <Route path="/" element={<Home />} />
        ) : ( */}
          <Route path="/" element={<Landing />} />
          {/* )} */}
          {/* {true ? (
          <Route path="/" element={<Home />} />
        ) : ( */}
          <Route path="/Login" element={<Login />} />
          {/* )} */}
          {/* {true ? (
          <Route path="/" element={<Home />} />
        ) : ( */}
          <Route path="/ChangePwd" element={<ChangePwd />} />
          {/* )} */}

          {true && <Route path="/Home" element={<Home />} />}
          {true && <Route path="/CodeTest" element={<CodeTest />} />}
          {true && <Route path="/LeaderBoard" element={<LeaderBoard />} />}
          {true && <Route path="/LiveSession" element={<LiveSession />} />}
          {true && <Route path="/PastContest" element={<PastContest />} />}
          {true && <Route path="/Profile" element={<Profile />} />}
          {true && <Route path="/Programming" element={<Programming />} />}
          {true && <Route path="/Reports" element={<Reports />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
