const DonationCards = ({ donation }) => {
  const { id, image, category, category_bg, title, text_color, card_bg } =
    donation;

  console.log(card_bg);
  return (
    <div className="gap-6 ">
      <div
        className={`card card-compact shadow-sm`}
        style={{ backgroundColor: `${card_bg}` }}
      >
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h4
            className="card-title text-sm font-medium py-1 px-[10px]"
            style={{
              backgroundColor: `${category_bg}`,
              color: `${text_color}`,
            }}
          >
            {category}
          </h4>
          <h2 style={{ color: `${text_color}` }}> {title} </h2>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;
