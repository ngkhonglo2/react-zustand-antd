import { Scatter, ScatterConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type ScatterChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & ScatterConfig;
const ScatterChart = ({
  data,
  xField,
  yField,
  ...props
}: ScatterChartProps) => {
  const config: ScatterConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Scatter {...config} />;
};
export default ScatterChart;

// https://ant-design-charts.antgroup.com/examples/statistics/scatter/#basic
