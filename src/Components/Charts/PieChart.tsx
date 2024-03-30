import { PieConfig, Pie } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type PieChartProps = {
  data: any;
  angleField: string,
  colorField: PrimitiveEncodeSpec,
} & PieConfig;

const PieChart = ({ data, angleField, colorField, ...props }: PieChartProps) => {
  const config: PieConfig = {
    data,
    angleField,
    colorField,
    ...props,
  };
  return <Pie {...config} />;
};
export default PieChart;

// https://ant-design-charts.antgroup.com/examples/statistics/pie/#basic