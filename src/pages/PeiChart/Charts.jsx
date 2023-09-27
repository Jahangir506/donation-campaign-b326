import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Charts = () => {
  const [donationData, setDonationData] = useState([]);
  const [peiCharts, setPeiCharts] = useState([]);

  console.log(donationData.length, peiCharts.length);

  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => setDonationData(data));
  }, []);

  useEffect(() => {
    const DonationAmount = JSON.parse(localStorage.getItem("donation"));
    setPeiCharts(DonationAmount);
  }, []);

  // const allData = donationData?.map((dates) => parseInt(dates.price));
  // const datesPrice = allData?.reduce(
  //   (itemPrice, currentPrice) => itemPrice + currentPrice,
  //   0
  // );

  // const dataAmounts = peiCharts?.map((dates) => parseInt(dates.price));
  // const amounts = dataAmounts?.reduce(
  //   (itemPrice, currentPrice) => itemPrice + currentPrice,
  //   0
  // );
  // console.log(amounts);

  const totalDonationPercentString =   peiCharts.length / donationData.length * 100
  console.log(totalDonationPercentString);

  const remainingDonationPercentage = 100 - totalDonationPercentString

  const data = [
    { name: "Group A", value: 50 },
    { name: "Group B", value: (remainingDonationPercentage) },
  ];

  const COLORS = [ "#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-32">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
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
      <div className="flex gap-x-8 justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="mr-2 font-light lg:font-medium">Your Donation</span>
          <button className="w-10 lg:w-20 h-2 bg-[#00C49F]"></button>
        </div>

        <div className="flex justify-center items-center">
          <span className="mr-2 font-light lg:font-medium">Total Donation</span>
          <button className="w-10 lg:w-20 h-2 bg-[#FF444A]"></button>
        </div>
      </div>
    </div>
  );
};

export default Charts;
