import { useState } from 'react';

const Banner = () => {
  const [search, setSearch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.name.value.toLowerCase());
  };
  console.log(search);
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };
  // console.log(search);

  return (
    <div
      className="hero w-full h-[600px]  mb-[100px]"
      style={{
        backgroundImage: 'url(/images/background.png)',
      }}
    >
      <div className="col-start-1 row-start-1 h-full w-full bg-white bg-opacity-95 "></div>
      <div className="hero-content text-center text-neutral-content ">
        <div>
          <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B] pb-10">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
              <input
                // onChange={handleSearch}
                type="text"
                placeholder="Search here...."
                name="name"
                className="input input-bordered rounded-r-none border-r-0 w-full max-w-xs text-black focus:outline-none"
              />
              <input
                className="btn btn-error bg-[#FF444A] hover:bg-[#b63b3f] font-semibold rounded-l-none border-l-0  text-white"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
