import { Col, Row } from "antd";
import LineChart from "../../../Components/Charts/LineChart";
import ColumnChart from "../../../Components/Charts/ColumnChart";
import PieChart from "../../../Components/Charts/PieChart";

const ChartPage = () => {
  const dataPie = [
    { type: "Loại 1", value: 27 },
    { type: "Loại 2", value: 25 },
    { type: "Loại 3", value: 18 },
    { type: "Loại 4", value: 15 },
    { type: "Loại 5", value: 10 },
    { type: "Loại 6", value: 5 },
  ];

  const dataColumn = [
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

  const dataLine = [
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

  const columnProps = {
    colorField: "violet",
    className: "bg-white rounded-lg",
  };

  const pieProps = {
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
    className: "bg-white rounded-lg",
  };

  return (
    <Row gutter={16} className="my-3">
      <Col span={12} className="overflow-hidden">
        <PieChart
          data={dataPie}
          {...pieProps}
          angleField={"value"}
          colorField={"type"}
        />
      </Col>

      <Col span={12} className="overflow-hidden">
        <ColumnChart
          data={dataColumn}
          xField={"year"}
          yField={"value"}
          {...columnProps}
        />
      </Col>

      <Col span={12} className="overflow-hidden">
        <LineChart
          data={dataLine}
          xField={"year"}
          yField={"value"}
          className="bg-white rounded-lg"
        />
      </Col>
    </Row>
  );
};
export default ChartPage;
