import { Table, TablePaginationConfig, TableProps } from "antd";

interface AntdTableProps<T extends object = any> extends TableProps<T> {
  pagination?: false | TablePaginationConfig;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: (total: number) => string;
}

const CTable = <T extends object = any>({
  pagination = {
    defaultPageSize: 20,
    defaultCurrent: 1,
    position: ["topRight", "bottomRight"],
  },
  showSizeChanger = true,
  showQuickJumper = true,
  showTotal = (total) => `Total ${total} items`,
  ...props
}: AntdTableProps<T>) => {
  return (
    <Table<T>
      pagination={{
        showSizeChanger,
        showQuickJumper,
        showTotal,
        ...pagination,
      }}
      {...props}
    />
  );
};

export default CTable;
