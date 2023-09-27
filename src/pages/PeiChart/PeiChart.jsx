// import { useEffect, useState } from "react";
// import { Pie, PieChart, ResponsiveContainer } from "recharts";


// const PeiChart = () => {
//   const {donationData, setDonationData} = useState([])
//   const [peiCharts, setPeiCharts] = useState([]);

//   useEffect(()=> {
//     fetch('donations.json')
//     .then(res => res.json())
//     .then(data => setDonationData(data))
//   },[])

//   useEffect(() => {
//     const DonationAmount = JSON.parse(localStorage.getItem("donation"));
//     setPeiCharts(DonationAmount);
//   }, []);

//   const allData = donationData?.reduce((donationData, currentDonation) => donationData + currentDonation.price, 0);

//   const amount = peiCharts?.reduce((donationData, currentDonation) => donationData + currentDonation.price, 0)


//   const totalPercent = parseInt(allData)  + parseInt(amount);
//   const totalDonationPercent = parseFloat((parseInt(amount) / totalPercent) * 100 ).toFixed(2);
//   console.log(totalDonationPercent);

//   const data = [
//     ['Donation', 'Total donation'],
//     ['Donation', parseInt(totalDonationPercent)],
//     ['Total donation', 100 - parseInt(totalDonationPercent)]
//   ];
//   console.log(data);

//  const options = {
//   title : 'Popularity of Types of Pizza',
//   sliceVisibilityThreshold: 0.2 // 20%
//  }

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             options={options}
//           >
            
//          </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//   );
// };

// export default PeiChart;
