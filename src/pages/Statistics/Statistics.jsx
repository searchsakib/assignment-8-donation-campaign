import { PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';

// const data = [
//   { name: 'Group A', value: 12 },
//   { name: 'Group B', value: 300 },
// ];

const COLORS = ['#00C49F', '#FF444A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Statistics() {
  const [donation, setDonation] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const myDonation = JSON.parse(localStorage.getItem('donation'));

    if (myDonation) {
      setDonation(myDonation);
    } else {
      setNotFound('No Donations Received Yet...');
    }
  }, []);

  const allData = 12;
  const remainingValue = allData - donation.length;
  const data = [
    { name: 'Donation', value: donation.length },
    { name: 'Remaining', value: remainingValue },
  ];

  return notFound ? (
    <p className="text-4xl font-bold text-green-500 text-center mt-24 mb-10 px-6 md:px-10 lg:px-10 xl:px-0">
      {' '}
      {notFound}{' '}
    </p>
  ) : (
    <div className="max-w-[1320px] mx-auto ">
      <div className="flex items-center justify-center ">
        <PieChart width={700} height={700} className="text-4xl font-medium">
          <Pie
            data={data}
            cx={300}
            cy={300}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex items-center gap-5">
        <p>Your Donation</p>
        <div class="border-t-[12px] border-[#00C49F]  w-[100px] rounded-sm"></div>
      </div>
    </div>
  );
}

// const Statistics = () => {
// const [donation, setDonation] = useState([]);
// const [notFound, setNotFound] = useState(false);

// useEffect(() => {
//   const myDonation = JSON.parse(localStorage.getItem('donation'));

//   if (myDonation) {
//     setDonation(myDonation);
//   } else {
//     setNotFound('No Donations Received Yet...');
//   }
// }, []);

// const allData = 12;
