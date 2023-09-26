import { PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';

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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="26px"
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
    <div className="max-w-[1320px] mx-auto overflow-x-hidden">
      <div className="flex items-center justify-center">
        <div className="max-w-screen-sm mx-auto">
          <PieChart width={500} height={500} className="text-4xl font-medium">
            <Pie
              data={data}
              // cx={250}
              // cy={250}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
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
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5 md:gap-12 lg:gap-14 mb-10">
        <div className="flex items-center gap-5">
          <p className="text-lg font-normal ">Your Donation</p>
          <div className="border-t-[12px] border-[#00C49F]  w-[100px] rounded-sm"></div>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-lg font-normal ">Total Donation</p>
          <div className="border-t-[12px] border-[#FF444A]  w-[100px] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
