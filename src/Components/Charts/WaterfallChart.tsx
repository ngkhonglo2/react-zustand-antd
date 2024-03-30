import { Waterfall, WaterfallConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type WaterfallChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & WaterfallConfig;

const WaterfallChart = ({
  data,
  xField,
  yField,
  ...props
}: WaterfallChartProps) => {
  const config: WaterfallConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Waterfall {...config} />;
};

export default WaterfallChart;

// https://ant-design-charts.antgroup.com/zh/examples/statistics/waterfall/#revenue-flow-waterfall