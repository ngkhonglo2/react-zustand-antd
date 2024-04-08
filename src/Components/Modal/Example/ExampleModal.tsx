import { Button, Col, Flex, Form, Row } from "antd";
import FormModal from "../FormModal";
import { validateEmail, validatePhone } from "../../../common/Validate";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DynamicFormListTable from "../../ChildInForms/DynamicFormListTable";
import InputForm from "../../Input/InputForm";
import {
  columnExampleTableForm,
  columnExampleTableForm2,
} from "../../Columns/Example/ExampleColumn";
import TextAreaForm from "../../Input/TextAreaForm";
import CTable from "../../Tables/CTable";
import CInput from "../../Input/CInput";
import { useExample } from "../../../store/Example";

interface ExampleModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExampleModal = ({ isModalOpen, setIsModalOpen }: ExampleModalProps) => {
  const [form] = Form.useForm();
  const [valName, setValName] = useState<string>("");
  const [valAge, setValAge] = useState<string>("");

  const { dataTableExample, add, remove, edit } = useExample((state) => state);

  const handleButtonClick = () => {
    const dataPath = {
      key: uuidv4(),
      name: valName,
      age: Number(valAge),
    };
    add(dataPath);
    setValName("");
    setValAge("");
  };

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
            <Button type="dashed" onClick={handleButtonClick}>
              Add Item
            </Button>
            <CInput
              label={"Name"}
              onChange={(val) => setValName(val)}
              value={valName}
            />
            <CInput
              label={"Age"}
              onChange={(val) => setValAge(val)}
              value={valAge}
            />
          </Flex>
          <CTable
            dataSource={dataTableExample}
            columns={columnExampleTableForm2(remove, edit)}
          />
        </div>
      </div>
    </FormModal>
  );
};

export default ExampleModal;
