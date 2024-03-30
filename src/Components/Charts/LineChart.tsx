import { Line, LineConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type LineChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & LineConfig;

const LineChart = ({ data, xField, yField, ...props }: LineChartProps) => {
  const config: LineConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Line {...config} />;
};
export default LineChart;

// https://ant-design-charts.antgroup.com/examples/statistics/line/#basic
