import { Form } from "antd";
import FormModal from "../FormModal";
import { useCustomer } from "../../../store/Customer";
import { useNavigate } from "react-router-dom";

const DefaultCustomerModal = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isOpenModal, handleOpenModal } = useCustomer((state) => state);
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <FormModal
      isModalOpen={isOpenModal}
      handleCancel={() => handleOpenModal(navigate)}
      form={form}
      title={"dsad"}
      onFinish={onFinish}
      width={"auto"}
    >
      <></>
    </FormModal>
  );
};

export default DefaultCustomerModal;
