import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import { todoListStatState } from "../store/selectors";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const stats = useRecoilValue(todoListStatState);

  const chartData = {
    labels: ["Completed", "Uncompleted"],
    datasets: [
      {
        data: [stats.percentCompleted, 100 - stats.percentCompleted],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={chartData} />;
};

export default PieChart;
