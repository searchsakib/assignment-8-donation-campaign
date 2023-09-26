import { PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';

// const data = [
//   { name: 'Group A', value: 12 },
//   { name: 'Group B', value: 300 },
// ];

const COLORS = ['#FF444A', '#00C49F'];

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
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
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
