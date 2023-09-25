import DonationCards from './DonationCards';
import { useState, useEffect } from 'react';

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('/donation.json')
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  // console.log(donations);
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-10 lg:px-10 xl:px-0 ">
        {donations?.map((donation, idx) => (
          <DonationCards key={idx} donation={donation}></DonationCards>
        ))}
      </div>
    </div>
  );
};

export default Donations;
