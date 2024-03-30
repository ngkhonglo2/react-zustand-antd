import { Stock, StockConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type StockChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & StockConfig;

const StockChart = ({data, xField, yField, ...props}: StockChartProps) => {
  const config: StockConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Stock {...config} />;
};

export default StockChart;

// https://ant-design-charts.antgroup.com/zh/examples/statistics/stock/#basic