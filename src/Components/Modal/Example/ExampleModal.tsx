import { Button, Col, Flex, Form, Row } from "antd";
import FormModal from "../FormModal";
import { validateEmail, validatePhone } from "../../../common/Validate";
import { useEffect } from "react";
import DynamicFormListTable from "../../ChildInForms/DynamicFormListTable";
import InputForm from "../../Input/InputForm";
import { columnExampleTableForm } from "../../Columns/Example/ExampleColumn";
import TextAreaForm from "../../Input/TextAreaForm";
import CTable from "../../Tables/CTable";
import CInput from "../../Input/CInput";

interface ExampleModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExampleModal = ({ isModalOpen, setIsModalOpen }: ExampleModalProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const removeAllItem = () => {
    form.setFieldValue("itemsTable", []);
  };

  useEffect(() => {
    form.setFieldValue("items", [{}]);
  }, []);

  return (
    <FormModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      form={form}
      title={"Example"}
      onFinish={onFinish}
      width={"auto"}
    >
      <div className="flex flex-col gap-8">
        <Row gutter={16}>
          <Col span={12}>
            <InputForm
              name="phone"
              label="Phone"
              formItemProps={{
                validateDebounce: 500,
                rules: [{ validator: validatePhone }],
              }}
            />
          </Col>
          <Col span={12}>
            <InputForm
              name="email"
              label="Email"
              formItemProps={{
                validateDebounce: 500,
                rules: [{ validator: validateEmail }],
              }}
            />
          </Col>
          <Col span={12}>
            <TextAreaForm name="note" label="Note" />
          </Col>
        </Row>

        <DynamicFormListTable
          columnForm={columnExampleTableForm}
          DynamicSubmitForm={(add) => (
            <Flex gap={16}>
              <Button type="dashed" onClick={() => add()}>
                Add Item
              </Button>
              <Button type="dashed" onClick={removeAllItem}>
                removie all Item
              </Button>
            </Flex>
          )}
          nameFormList={"itemsTable"}
          location={"bottom"}
        />

        <div>
          <Flex>
            <Button type="dashed" onClick={() => {}}>
              Add Item
            </Button>
            {/* <CInput /> */}
          </Flex>
          <CTable />
        </div>
      </div>
    </FormModal>
  );
};

export default ExampleModal;
