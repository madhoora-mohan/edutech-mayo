import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <>
      <div className="h-[80vh] w-2/12 flex flex-col outline outline-1 outline-neutral-700 rounded-sm py-6 px-4">
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              to="/CodeTest"
              className="p-2 border-b border-neutral-700 hover:bg-[#323234]"
            >
              Code Test
            </Link>
          </li>
          <li>
            <Link
              to="/Programming"
              className="p-2 border-b border-neutral-700 hover:bg-[#323234] "
            >
              Programming
            </Link>
          </li>
          <li>
            <Link
              to="/PastContest"
              className="p-2 border-b border-neutral-700 hover:bg-[#323234] "
            >
              Past Contests
            </Link>
          </li>
          <li>
            <Link
              to="/LiveSession"
              className="p-2 border-b border-neutral-700 hover:bg-[#323234] "
            >
              Live Session
            </Link>
          </li>
          <li>
            <Link to="/Articles" className="p-2 hover:bg-[#323234] ">
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
