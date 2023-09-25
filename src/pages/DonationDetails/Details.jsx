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
        <div className="mb-28">
          <h5 className="mb-2 block font-sans text-[40px] text-[#0B0B0B] pt-14 pb-4 font-bold leading-snug tracking-normal  antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
