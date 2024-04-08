import { CloseOutlined } from "@ant-design/icons";
import { Input, TableProps } from "antd";
import InputForm from "../../Input/InputForm";
import { IDataTableExample } from "../../../interfaces/Example/dataTable.interface";

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

export const columnExampleTableForm2: (
  remove: (key: string) => void,
  edit: (val: Partial<IDataTableExample>, key: string) => void
) => TableProps<any>["columns"] = (remove, edit) => [
  {
    title: "Name",
    dataIndex: "name",
    width: 200,
    render: (name, res) => {
      console.log("alo", name);

      return (
        <Input
          value={name}
          onChange={(val) => edit({ name: val.target.value }, res.key)}
        />
      );
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 200,
    render: (age) => {
      return <div>{age}</div>;
    },
  },
  {
    title: "Action",
    dataIndex: "key",
    width: 100,
    render: (key) => {
      return <CloseOutlined onClick={() => remove(key)} />;
    },
  },
];
