import { Funnel, FunnelConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type FunnelChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & FunnelConfig;

const FunnelChart = ({ data, xField, yField, ...props }: FunnelChartProps) => {
  const config: FunnelConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Funnel {...config} />;
};
export default FunnelChart;

// https://ant-design-charts.antgroup.com/examples/statistics/funnel/#funnel