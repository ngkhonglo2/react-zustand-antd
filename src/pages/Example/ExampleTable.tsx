import { Typography } from "antd";
import ContainerContent from "../../Components/ContainerContent";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { GetProp, RadioChangeEvent, TableProps } from "antd";
import { Form, Radio, Space, Switch, Table } from "antd";
import CTable from "../../Components/Tables/CTable";

type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;
type TableRowSelection<T extends object> = TableProps<T>["rowSelection"];

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const { Title } = Typography;

const ExampleTable = () => {
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<DataType> | undefined
  >({});
  const tableColumns = columns.map((item) => ({ ...item }));
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";

  const tableProps: TableProps<DataType> = {
    bordered: true,
    loading: false,
    rowSelection,
  };

  const handleRowSelectionChange = (enable: boolean) => {
    setRowSelection(enable ? {} : undefined);
  };

  return (
    <ContainerContent title="Example table" propsTitle={Title}>
      <CTable
        {...tableProps}
        columns={tableColumns}
        dataSource={data ? data : []}
        scroll={{ y: 240 }}
      />
    </ContainerContent>
  );
};

export default ExampleTable;
