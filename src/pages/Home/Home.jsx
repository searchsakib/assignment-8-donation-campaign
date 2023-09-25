import Banner from '../../components/Header/Banner/Banner';
import Donations from '../../components/Header/Donation/Donations';

const Home = () => {
  return (
    <div className="pb-[100px]">
      <Banner></Banner>
      <div>
        <Donations></Donations>
      </div>
    </div>
  );
};

export default Home;
