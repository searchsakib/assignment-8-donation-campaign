import { useEffect, useState } from 'react';
import MyDonationCard from './MyDonationCard';

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const myDonation = JSON.parse(localStorage.getItem('donation'));

    if (myDonation) {
      setDonation(myDonation);
    } else {
      setNotFound('No Donations Received');
    }
  }, []);

  // console.log(donation);
  // console.log(notFound);
  console.log(seeAll);

  return (
    <div>
      {notFound ? (
        <p className="text-4xl font-bold text-red-500 text-center mt-24 mb-10 px-6 md:px-10 lg:px-10 xl:px-0">
          {' '}
          {notFound}{' '}
        </p>
      ) : (
        <div>
          <div className="max-w-[1320px] mx-auto mt-20 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 px-6 md:px-10 lg:px-10 xl:px-0">
              {donation?.map((donate) => (
                <MyDonationCard
                  key={donate.id}
                  donate={donate}
                ></MyDonationCard>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => setSeeAll(!seeAll)}
                className="btn btn-primary border-none text-white bg-[#009444] font-semibold text-xs md:text-sm lg:text-base py-1 px-2 md:py-[6px] md:px-3 lg:py-[9px] lg:px-4 mb-5 rounded-lg"
              >
                See All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
