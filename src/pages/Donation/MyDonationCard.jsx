const MyDonationCard = ({ donate }) => {
  const { title, image, price, text_color, category, card_bg, category_bg } =
    donate;
  return (
    <div
      className=" card md:card-side lg:card-side bg-base-100 shadow-xl"
      style={{ backgroundColor: `${card_bg}` }}
    >
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body pl-6 pr-0 pt-0 pb-0">
        <h4
          className="card-title text-base font-medium w-fit py-1 px-[10px] rounded mt-6"
          style={{
            backgroundColor: `${category_bg}`,
            color: `${text_color}`,
          }}
        >
          {category}
        </h4>
        <h2 className="font-semibold text-base md:text-base lg:text-base xl:text-xl">
          {title}
        </h2>
        <p
          className="text-base font-semibold"
          style={{ color: `${text_color}` }}
        >
          {price}
        </p>
        <div className="card-actions justify-start">
          <button
            className="btn btn-primary border-none text-white font-medium text-xs md:text-sm lg:text-base py-1 px-2 md:py-[6px] md:px-3 lg:py-[9px] lg:px-4 mb-5 rounded"
            style={{ backgroundColor: `${text_color}` }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDonationCard;
