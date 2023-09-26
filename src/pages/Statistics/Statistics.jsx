const Statistics = () => {
  const myDonation = JSON.parse(localStorage.getItem('donation'));
  console.log(myDonation);
  return (
    <div>
      <h2>This is statistics</h2>
    </div>
  );
};

export default Statistics;
