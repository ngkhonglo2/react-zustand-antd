import { BidirectionalBar, BidirectionalBarConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type BidirectionalBarChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & BidirectionalBarConfig;

const BidirectionalBarChart = ({
  data,
  xField,
  yField,
  ...props
}: BidirectionalBarChartProps) => {
  const config: BidirectionalBarConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <BidirectionalBar {...config} />;
};
export default BidirectionalBarChart;

// https://ant-design-charts.antgroup.com/examples/statistics/bidirectional-bar/#basic