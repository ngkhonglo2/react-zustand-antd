import { Button, Flex, TableProps, Typography } from "antd";
import ContainerContent from "../../Components/ContainerContent";
import CTable from "../../Components/Tables/CTable";
import { TableRowSelection } from "antd/es/table/interface";
import { Suspense, lazy, useState } from "react";
import { columnCustomer } from "../../Components/Columns/Customer/Customer.column";
import { ICustomer } from "../../interfaces/Customer/customer.interface";
import { useCustomer } from "../../store/Customer";

const DefaultCustomerModal = lazy(
  () => import("../../Components/Modal/Customer/DefaultCustomerModal")
);

const { Title } = Typography;

const CustomerPage = () => {
  const { dataCustomers } = useCustomer((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<ICustomer> | undefined
  >({});

  const tableProps: TableProps<ICustomer> = {
    bordered: true,
    loading: false,
    rowSelection,
  };

  return (
    <ContainerContent title="Example table" propsTitle={Title}>
      <Flex justify="end">
        <Button onClick={() => setIsOpen(true)}>Thêm</Button>
      </Flex>
      <CTable
        {...tableProps}
        columns={columnCustomer()}
        dataSource={dataCustomers}
        scroll={{ y: "60vh", x: "100vh" }}
      />
      {isOpen && (
        <Suspense>
          <DefaultCustomerModal
            isModalOpen={isOpen}
            setIsModalOpen={setIsOpen}
          />
        </Suspense>
      )}
    </ContainerContent>
  );
};

export default CustomerPage;
