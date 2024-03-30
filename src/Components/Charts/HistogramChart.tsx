import { Histogram, HistogramConfig } from "@ant-design/charts";

type HistogramChartProps = {
  data: any;
  binField: string;
} & HistogramConfig;

const HistogramChart = ({ data, binField, ...props }: HistogramChartProps) => {
  const config: HistogramConfig = {
    data,
    binField,
    ...props,
  };
  return <Histogram {...config} />;
};
export default HistogramChart;
