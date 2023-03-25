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
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ChangePwd" element={<ChangePwd />} />
      <Route path="/CodeTest" element={<CodeTest />} />
      <Route path="/LeaderBoard" element={<LeaderBoard />} />
      <Route path="/LiveSession" element={<LiveSession />} />
      <Route path="/PastContest" element={<PastContest />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Programming" element={<Programming />} />
      <Route path="/Reports" element={<Reports />} />
    </Routes>
  );
}

export default App;
