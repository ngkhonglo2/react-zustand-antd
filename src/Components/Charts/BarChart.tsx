import { Bar, BarConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type BarChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & BarConfig;

const BarChart = ({data, xField, yField, ...props}: BarChartProps) => {
  const config: BarConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Bar {...config} />;
};
export default BarChart;

// https://ant-design-charts.antgroup.com/examples/statistics/bar/#shape