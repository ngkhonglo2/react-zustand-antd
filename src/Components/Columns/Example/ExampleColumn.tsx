import { CloseOutlined } from "@ant-design/icons";
import { TableProps } from "antd";
import InputForm from "../../Input/InputForm";

export const columnExampleTableForm: (
  remove: (index: number | number[]) => void
) => TableProps<any>["columns"] = (remove) => [
  {
    title: "First",
    dataIndex: "name",
    render: (name) => {
      return (
        <InputForm name={[name, "first"]} formItemProps={{ noStyle: true }} />
      );
    },
  },
  {
    title: "Second",
    dataIndex: "name",
    render: (name) => {
      return (
        <InputForm name={[name, "second"]} formItemProps={{ noStyle: true }} />
      );
    },
  },
  {
    title: "Action",
    dataIndex: "name",
    render: (name) => {
      return (
        <CloseOutlined
          onClick={() => {
            remove(name);
          }}
        />
      );
    },
  },
];
