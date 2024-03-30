import { DualAxes, DualAxesConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type DualAxesChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
} & DualAxesConfig;

const DualAxesChart = ({
  data,
  xField,
  ...props
}: DualAxesChartProps) => {
  const config: DualAxesConfig = {
    data,
    xField,
    ...props,
  };
  return <DualAxes {...config} />;
};
export default DualAxesChart;

// https://ant-design-charts.antgroup.com/examples/statistics/dual-axes/#basic
