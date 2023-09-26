import { useEffect, useState } from 'react';
import MyDonationCard from './MyDonationCard';

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const myDonation = JSON.parse(localStorage.getItem('donation'));

    if (myDonation) {
      setDonation(myDonation);
    } else {
      setNotFound('No Donations Received');
    }
  }, []);

  console.log(donation);
  console.log(notFound);

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
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
