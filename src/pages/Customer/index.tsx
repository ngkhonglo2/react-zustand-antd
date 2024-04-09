import { Button, Flex, TableProps, Typography } from "antd";
import ContainerContent from "../../Components/ContainerContent";
import CTable from "../../Components/Tables/CTable";
import { TableRowSelection } from "antd/es/table/interface";
import { useState } from "react";
import { columnCustomer } from "../../Components/Columns/Customer/Customer.column";
import { ICustomer } from "../../interfaces/Customer/customer.interface";
import { useCustomer } from "../../store/Customer";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAME } from "../../constant/router.constant";

const { Title } = Typography;

const CustomerPage = () => {
  const navigate = useNavigate();
  const { dataCustomers, handleOpenModal } = useCustomer((state) => state);
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
        <Button
          onClick={() => {
            navigate(`${ROUTER_NAME.CUSTOMER}/create`);
            handleOpenModal();
          }}
        >
          Thêm
        </Button>
      </Flex>
      <CTable
        {...tableProps}
        columns={columnCustomer()}
        dataSource={dataCustomers}
        scroll={{ y: "60vh", x: "100vh" }}
      />
    </ContainerContent>
  );
};

export default CustomerPage;
