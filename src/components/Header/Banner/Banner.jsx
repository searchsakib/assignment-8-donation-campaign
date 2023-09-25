const Banner = () => {
  return (
    <div
      className="hero w-full h-[600px]  mb-[100px]"
      style={{
        backgroundImage: 'url(../../../../public/images/background.png)',
      }}
    >
      <div className="col-start-1 row-start-1 h-full w-full bg-white bg-opacity-95 "></div>
      <div className="hero-content text-center text-neutral-content ">
        <div>
          <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B] pb-10">
            I Grow By Helping People In Need
          </h1>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search here...."
              className="input input-bordered rounded-r-none border-r-0 w-full max-w-xs text-black focus:outline-none"
            />
            <button className="btn btn-error font-semibold rounded-l-none border-l-0  text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
