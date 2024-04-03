import { Typography } from "antd";
import ContainerContent from "../../Components/ContainerContent";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { GetProp, TableProps } from "antd";
import { Space } from "antd";
import CTable from "../../Components/Tables/CTable";
import ExampleModal from "../../Components/Modal/components/ExampleModal";

type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;
type TableRowSelection<T extends object> = TableProps<T>["rowSelection"];

interface DataType {
  key: number;
  id: number;
  name: string;
  age: number;
  address: string;
}

const { Title } = Typography;

const ExampleTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<DataType> | undefined
  >({});
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => {
        return (
          <div
            className="cursor-pointer hover:text-blue-600"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {name}
          </div>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      // filters: [
      //   {
      //     text: "London",
      //     value: "London",
      //   },
      //   {
      //     text: "New York",
      //     value: "New York",
      //   },
      // ],
      // onFilter: (value, record) => record.address.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      key: "action",
      // sorter: true,
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
  for (let i = 1; i <= 30; i++) {
    data.push({
      key: i,
      id: i,
      name: `John Brown ${i}`,
      age: Number(`${i}2`),
      address: `New York No. ${i} Lake Park`,
    });
  }
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
        scroll={{ y: "60vh", x: "max-content" }}
      />
      {isModalOpen && (
        <ExampleModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </ContainerContent>
  );
};

export default ExampleTable;
