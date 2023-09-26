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
      setNotFound('No data Found');
    }
  }, []);

  console.log(donation);
  console.log(notFound);

  return (
    <div>
      {notFound ? (
        <p className="text-4xl font-bold text-red-500 text-center">
          {' '}
          {notFound}{' '}
        </p>
      ) : (
        <div>
          {' '}
          {donation?.map((donate) => (
            <MyDonationCard key={donate.id} donate={donate}></MyDonationCard>
          ))}{' '}
        </div>
      )}
    </div>
  );
};

export default Donation;
