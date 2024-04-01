import { Table, TablePaginationConfig, TableProps } from "antd";

interface AntdTableProps<T extends object = any> extends TableProps<T> {
  pagination?: false | TablePaginationConfig;
}

const CTable = <T extends object = any>({
  pagination = { position: ["bottomRight"] },
  ...props
}: AntdTableProps<T>) => {
  return <Table<T> pagination={pagination} {...props} />;
};

export default CTable;
