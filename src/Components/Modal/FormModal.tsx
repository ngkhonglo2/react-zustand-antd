import { Button, Flex, ModalProps } from "antd";
import Form, { FormInstance, FormProps } from "antd/es/form/Form";
import Modal from "antd/es/modal/Modal";
import { ModalFooterRender } from "antd/es/modal/interface";

interface FormModalProps extends ModalProps {
  children: React.ReactNode;
  footer?: ModalFooterRender | React.ReactNode;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  handleCancel?: () => void;
  form?: FormInstance<any>;
  onFinish?: (values: any) => void;
  formProps?: FormProps;
}

const FormModal = ({
  children,
  footer,
  setIsModalOpen,
  isModalOpen,
  handleCancel = () => setIsModalOpen(false),
  form,
  onFinish,
  formProps,
  ...props
}: FormModalProps) => {
  const handleSubmit = (values: any) => {
    if (onFinish) {
      onFinish(values);
    }
  };

  const defaultFooter = (
    <Flex justify="end" gap={8}>
      <Button onClick={handleCancel}>cancel</Button>
      <Button type="primary" className="text-white bg-primary">
        Save
      </Button>
    </Flex>
  );

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      destroyOnClose={true}
      footer={footer ? footer : defaultFooter}
      {...props}
    >
      <Form form={form} onFinish={handleSubmit} {...formProps}>
        {children}
      </Form>
    </Modal>
  );
};

export default FormModal;
