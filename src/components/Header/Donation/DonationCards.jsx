import { Link } from 'react-router-dom';

const DonationCards = ({ donation }) => {
  const { id, image, category, category_bg, title, text_color, card_bg } =
    donation || {};

  // console.log(card_bg);
  return (
    <div className="gap-6 ">
      <Link to={`/donation-details/${id}`}>
        <div
          className={`card card-compact shadow-sm`}
          style={{ backgroundColor: `${card_bg}` }}
        >
          <figure>
            <img className="w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h4
              className="card-title text-base font-medium w-fit py-1 px-[10px] rounded "
              style={{
                backgroundColor: `${category_bg}`,
                color: `${text_color}`,
              }}
            >
              {category}
            </h4>
            <h2
              style={{ color: `${text_color}` }}
              className="font-semibold text-xl"
            >
              {' '}
              {title}{' '}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCards;
