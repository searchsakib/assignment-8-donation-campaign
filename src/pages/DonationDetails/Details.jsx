const Details = ({ donationDetails }) => {
  const { image_big, title, description } = donationDetails;

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-20">
        <div className="relative  -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="w-full"
            src={image_big}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div>
          <h5 className="mb-2 block font-sans text-[40px] text-[#0B0B0B] pt-14 pb-4 font-bold leading-snug tracking-normal  antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
