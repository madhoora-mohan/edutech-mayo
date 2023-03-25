import { Link } from "react-router-dom";

export const Navbar = () => {
  let logout = () => {
    console.log("logged out");
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
            <Link to="/Reports">Reports</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/LeaderBoard">LeaderBoard</Link>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
