import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Charts = () => {

  const [donationData, setDonationData] = useState([])
  const [peiCharts, setPeiCharts] = useState([]);

  useEffect(()=>{
    fetch('donations.json')
    .then(res => res.json())
    .then(data => setDonationData(data))
  },[])

  useEffect(() => {
    const DonationAmount = JSON.parse(localStorage.getItem("donation"));
    setPeiCharts(DonationAmount);
  }, []);

    const allData = donationData?.map(dates => parseInt(dates.price));
    const datesPrice = allData?.reduce((itemPrice, currentPrice) => itemPrice + currentPrice, 0)
    console.log(datesPrice);

    const dataAmounts = peiCharts?.map(dates => parseInt(dates.price));
    const amounts = dataAmounts?.reduce((itemPrice, currentPrice) => itemPrice + currentPrice, 0)
    console.log(amounts);
    
  const totalDonationPercentString = parseFloat((parseInt(amounts) / datesPrice) * 100 ).toFixed(2);
  const totalDonationPercent = parseFloat(totalDonationPercentString)
  console.log(totalDonationPercent);


  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 352 }
  ];

  const COLORS = ["#FF444A", "#00C49F"];

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
     <div  className="flex justify-center items-center mt-32">
     <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
     </div>
      <div className="flex gap-x-48 justify-center items-center">
        <p>Your Donation <span  className=" divide-y-8 bg-red-500"></span></p>
        <p>Total Donation</p>
      </div>
    </div>
  );
};

export default Charts;
