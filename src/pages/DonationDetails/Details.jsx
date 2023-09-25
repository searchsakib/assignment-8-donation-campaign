import React from 'react';

const Details = ({ donationDetails }) => {
  const { image_big, title, description, text_color } = donationDetails;

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 mt-20 px-6 md:px-10 lg:px-10 xl:px-0">
        <div className="relative -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="w-full"
            src={image_big}
            alt="img-blur-shadow"
            layout="fill"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-[#0B0B0B80] opacity-60 h-[130px]"></div>

          <div className="absolute bottom-8 left-9 right-0 flex items-center justify-start h-16">
            <button
              className=" text-white px-[26px] py-4 rounded shadow-md w-fit"
              style={{ backgroundColor: `${text_color}` }}
            >
              Donate $290
            </button>
          </div>
        </div>
        <div className="mb-28">
          <h5 className="mb-2 block text-[40px] text-[#0B0B0B] pt-14 pb-4 font-bold leading-snug tracking-normal antialiased">
            {title}
          </h5>
          <p className="block text-base font-normal leading-[30px] antialiased text-[#0B0B0BB2]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
