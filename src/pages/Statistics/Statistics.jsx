import { Pie, PieChart } from "recharts";

const Statistics = () => {

    const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 170
  }
];


  return (
    <div className="flex justify-center items-center my-24">
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
