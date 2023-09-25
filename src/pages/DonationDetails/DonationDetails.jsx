import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

const DonationDetails = () => {
  const [donationDetails, setDonationDetails] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const donationFetched = useLoaderData();
  // console.log(donationFetched);

  useEffect(() => {
    const findDonation = donationFetched?.find((donation) => donation.id == id);
    setDonationDetails(findDonation);
  }, [id, donationFetched]);

  // console.log(donationDetails);

  return (
    <div>
      <Details donationDetails={donationDetails}></Details>
    </div>
  );
};

export default DonationDetails;
