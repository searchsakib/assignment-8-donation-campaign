import { useEffect, useState } from 'react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const Statistics = () => {
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

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="max-w-[1320px] mx-auto">
      {notFound ? (
        <p className="text-4xl font-bold text-green-500 text-center mt-24 mb-10 px-6 md:px-10 lg:px-10 xl:px-0">
          {notFound}
        </p>
      ) : (
        <div>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
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
                <Label
                  value={`${((data[0].value / allData) * 100).toFixed(2)}%`}
                  position="insideBottom"
                  fill="#fff"
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Statistics;
