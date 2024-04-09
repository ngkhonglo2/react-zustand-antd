import { Button, Flex, Form, FormInstance, FormProps, ModalProps } from "antd";
import Modal from "antd/es/modal/Modal";

interface FormModalProps extends ModalProps {
  children: React.ReactNode;
  footerForm?: React.ReactNode;
  isModalOpen: boolean;
  handleCancel: () => void;
  form?: FormInstance<any>;
  nameForm?: string;
  onFinish?: (values: any) => void;
  formProps?: FormProps;
}

const FormModal = ({
  children,
  footerForm,
  isModalOpen,
  handleCancel,
  form,
  nameForm,
  onFinish,
  formProps,
  ...props
}: FormModalProps) => {
  const handleClose = () => {
    handleCancel();
    form?.resetFields();
  };

  const handleSubmit = (values: any) => {
    if (onFinish) {
      onFinish(values);
    }
  };

  const defaultFooterForm = (
    <Flex justify="end" gap={8}>
      <Button onClick={handleClose}>cancel</Button>
      <Button
        type="primary"
        className="text-white bg-primary"
        htmlType="submit"
      >
        Save
      </Button>
    </Flex>
  );

  return (
    <Modal open={isModalOpen} onCancel={handleClose} footer={null} {...props}>
      <Form form={form} name={nameForm} onFinish={handleSubmit} {...formProps}>
        {children}
        <div className="mt-3">
          {footerForm ? footerForm : defaultFooterForm}
        </div>
      </Form>
    </Modal>
  );
};

export default FormModal;
