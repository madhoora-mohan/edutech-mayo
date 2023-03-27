import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <>
      <div className="flex flex-col outline outline-1 outline-[#373737] rounded-sm w-2/12 py-6 px-4 mb-2">
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              to="/CodeTest"
              className="p-4 border-b border-[#373737] hover:bg-[#323234] hover:text-[#ababab]"
            >
              Code Test
            </Link>
          </li>
          <li>
            <Link
              to="/Programming"
              className="p-4 border-b border-[#373737] hover:bg-[#323234] hover:text-[#ababab]"
            >
              Programming
            </Link>
          </li>
          <li>
            <Link
              to="/PastContest"
              className="p-4 border-b border-[#373737] hover:bg-[#323234] hover:text-[#ababab]"
            >
              Past Contests
            </Link>
          </li>
          <li>
            <Link
              to="/LiveSession"
              className="p-4 border-b border-[#373737] hover:bg-[#323234] hover:text-[#ababab]"
            >
              Live Session
            </Link>
          </li>
          <li>
            <Link
              to="/Articles"
              className="p-4 hover:bg-[#323234] hover:text-[#ababab]"
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
