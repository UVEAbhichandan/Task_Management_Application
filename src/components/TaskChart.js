import { connect } from "react-redux";
import Header from "./Header";
import Chart from "react-apexcharts";

const TaskChart = (props) => {
  function removeDuplicates(data, key) {
    return [...new Map(data?.map((x) => [key(x), x])).values()];
  }

  const currentDate = new Date();
  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(currentDate.getDate() + 7);

  const rowData = props.tasks?.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= currentDate && itemDate <= sevenDaysFromNow;
  });

  const lastXDays = removeDuplicates(rowData, (it) => it.date);
  const row = lastXDays?.map((ele) => {
    return ele.date;
  });

  let column = Array(lastXDays.length).fill(0);
  props.tasks?.forEach((ele, index) => {
    if (row.includes(ele.date)) {
      column[row.indexOf(ele.date)]++;
    }
  });
  const series = [
    {
      type: "column", //use column chart here.
      name: "No. of tasks",
      data: column,
    },
  ];
  const options = {
    chart: {
      id: "task-chart",
    },
    xaxis: {
      categories: row,
    },
  };
  return (
    <div>
      <Header />
      <h1>Task Chart</h1>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={500}
        height={320}
      />
    </div>
  )
}
const mapStateToProps = ({ tasks }) => ({ tasks });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskChart);

