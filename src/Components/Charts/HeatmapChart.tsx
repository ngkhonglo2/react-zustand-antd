import { Heatmap, HeatmapConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type HeatmapChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & HeatmapConfig;

const HeatmapChart = ({
  data,
  xField,
  yField,
  ...props
}: HeatmapChartProps) => {
  const config: HeatmapConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Heatmap {...config} />;
};

export default HeatmapChart;

// https://ant-design-charts.antgroup.com/examples/statistics/heatmap/#basic
