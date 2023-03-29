import LeftNav from "../components/LeftNav";

const Home = () => {
  return (
    <>
      <div className="mt-4 mb-2 flex gap-2 w-[97.5vw]">
        <LeftNav />
        <div className="outline outline-1 p-4 outline-neutral-700 w-full myClassName">
          Home
        </div>
      </div>
    </>
  );
};

export default Home;
