import { Column, ColumnConfig } from "@ant-design/charts";
import { PrimitiveEncodeSpec } from "./interface";

type ColumnChartProps = {
  data: any;
  xField: PrimitiveEncodeSpec;
  yField: PrimitiveEncodeSpec;
} & ColumnConfig;

const ColumnChart = ({ data, xField, yField, ...props }: ColumnChartProps) => {
  const config: ColumnConfig = {
    data,
    xField,
    yField,
    ...props,
  };
  return <Column {...config} />;
};
export default ColumnChart;

// https://ant-design-charts.antgroup.com/examples/statistics/column/#column
