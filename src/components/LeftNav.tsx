import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <>
      <div className="h-[80vh] w-2/12 flex flex-col outline outline-1 outline-neutral-700 rounded-sm py-6 px-4">
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              to="/Test"
              className="p-2 flex items-center border-b border-neutral-700 hover:bg-[#323234]"
            >
              <img
                src="https://img.icons8.com/material-outlined/20/99999a/source-code.png"
                className="pr-2"
              />
              Code/MCQ Test
            </Link>
          </li>
          <li>
            <Link
              to="/Programming"
              className="p-2 flex items-center border-b border-neutral-700 hover:bg-[#323234] "
            >
              <img
                src="https://img.icons8.com/material-outlined/20/99999a/code.png"
                className="pr-2"
              />
              Programming
            </Link>
          </li>
          <li>
            <Link
              to="/PastContest"
              className="p-2 flex items-center border-b border-neutral-700 hover:bg-[#323234] "
            >
              <img
                src="https://img.icons8.com/material-outlined/20/99999a/historical.png"
                className="pr-2"
              />
              Past Contests
            </Link>
          </li>
          <li>
            <Link
              to="/LiveSession"
              className="p-2 flex items-center border-b border-neutral-700 hover:bg-[#323234] "
            >
              <img
                src="https://img.icons8.com/material-outlined/20/99999a/youtube-live.png"
                className="pr-2"
              />
              Live Session
            </Link>
          </li>
          <li>
            <Link
              to="/Articles"
              className="px-2 pb-2 flex items-center hover:bg-[#323234] "
            >
              <img
                src="https://img.icons8.com/material-outlined/22/99999a/my-topic.png"
                className="pr-2"
              />
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
