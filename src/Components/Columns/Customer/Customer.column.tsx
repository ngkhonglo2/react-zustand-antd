import { CloseOutlined } from "@ant-design/icons";
import { TableProps } from "antd";
import { ICustomer } from "../../../interfaces/Customer/customer.interface";

export const columnCustomer: () => TableProps<ICustomer>["columns"] = () => [
  {
    title: "Mã khách hàng",
    dataIndex: "code",
    width: 200,
  },
  {
    title: "Tên khách hàng",
    dataIndex: "name",
    width: 350,
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    width: 300,
  },
  {
    title: "Công nợ",
    dataIndex: "debt",
    width: 200,
    align: "end",
  },
  {
    title: "Mã số thuế",
    dataIndex: "tax_code",
    width: 200,
  },
  {
    title: "Điện thoại",
    dataIndex: "phone",
    width: 200,
  },
  {
    title: "ĐT người LH",
    dataIndex: "contact_phone",
    width: 200,
  },
  {
    title: "Là đối tượng nội bộ",
    dataIndex: "internal",
    width: 200,
  },
  {
    title: "Action",
    dataIndex: "key",
    width: 150,
    fixed: "right",
    render: (key) => {
      return <CloseOutlined onClick={() => {}} />;
    },
  },
];
