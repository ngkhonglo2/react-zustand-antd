import { Area, AreaConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type AreaChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & AreaConfig;

const AreaChart = ({ data, xField, yField, ...props }: AreaChartProps) => {
  const config: AreaConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Area {...config} />;
};

export default AreaChart;

// https://ant-design-charts.antgroup.com/examples/statistics/area/#basic