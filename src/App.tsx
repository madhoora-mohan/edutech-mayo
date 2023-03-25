import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CodeTest from "./pages/CodeTest";
import LeaderBoard from "./components/LeaderBoard";
import LiveSession from "./pages/LiveSession";
import PastContest from "./pages/PastContest";
import Profile from "./pages/Profile";
import Programming from "./pages/Programming";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import ChangePwd from "./pages/ChangePwd";

function App() {
  return (
    <div className="m-1 bg-zinc-800 h-screen min-w-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        {true && <Route path="/ChangePwd" element={<ChangePwd />} />}
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
  );
}

export default App;
