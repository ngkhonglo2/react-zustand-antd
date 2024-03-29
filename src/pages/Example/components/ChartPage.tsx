import { Column, Pie } from "@ant-design/charts";
import { Col, Row } from "antd";

const ChartPage = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const props = {
    data,
    xField: "year",
    yField: "value",
  };
  const config: any = {
    data: [
      { type: "Loại 1", value: 27 },
      { type: "Loại 2", value: 25 },
      { type: "Loại 3", value: 18 },
      { type: "Loại 4", value: 15 },
      { type: "Loại 5", value: 10 },
      { type: "Loại 6", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    label: {
      text: (data: { type: string; value: number }) => {
        return `${data.value}%`;
      },
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "left",
        rowPadding: 5,
      },
    },
  };
  return (
    <Row gutter={16} className="my-3">
      <Col span={12} className="overflow-hidden">
        <Pie {...config} className="bg-white" />
      </Col>
      <Col span={12} className="overflow-hidden">
        <Column {...props} className="bg-white" />
      </Col>
    </Row>
  );
};
export default ChartPage;
