import { Checkbox, Col, Form, Radio, RadioChangeEvent, Row } from "antd";
import FormModal from "../FormModal";
import { useState } from "react";
import InputForm from "../../Input/InputForm";
import TextAreaForm from "../../Input/TextAreaForm";
import InputNumberForm from "../../Input/InputNumerForm";
import TabsDefaultCustomer from "../../../pages/Customer/components/DefaultCustomer/TabsDefaultCustomer";

interface DefaultCustomerModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DefaultCustomerModal = ({
  isModalOpen,
  setIsModalOpen,
}: DefaultCustomerModalProps) => {
  const [form] = Form.useForm();
  const [checkBox, setCheckBox] = useState(false);
  const [checkBoxObject, setCheckBoxObject] = useState(false);
  const [valueRadio, setValueRadio] = useState<string>("individual");

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValueRadio(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <FormModal
      isModalOpen={isModalOpen}
      handleCancel={() => setIsModalOpen(false)}
      form={form}
      title={"dsad"}
      onFinish={onFinish}
      width={"auto"}
    >
      <Row gutter={32}>
        <Col span={12}>
          <Radio.Group onChange={onChangeRadio} value={valueRadio}>
            <Radio value={"organize"}>Tổ chức</Radio>
            <Radio value={"individual"}>Cá nhân</Radio>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <Checkbox
            checked={checkBox}
            onChange={(e) => setCheckBox(e.target.checked)}
          >
            Là nhà cung cấp
          </Checkbox>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={8}>
              <InputForm label="Mã số thuế" name="tax_code" />
            </Col>
            <Col span={16}>
              <InputForm
                label="Mã khách hàng"
                name="code"
                formItemProps={{
                  rules: [
                    { required: true, message: `Vui lòng nhập mã khách hàng` },
                  ],
                }}
              />
            </Col>
          </Row>
          <InputForm
            label="Tên khách hàng"
            name="name"
            formItemProps={{
              rules: [
                { required: true, message: `Vui lòng nhập tên khách hàng` },
              ],
            }}
          />
          <TextAreaForm
            label="Địa chỉ"
            name="address"
            textAreaProps={{
              placeholder: "VD: Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
            }}
          />
        </Col>

        <Col span={12}>
          <Row gutter={16}>
            <Col span={8}>
              <InputNumberForm label="Điện thoại" name="phone" />
            </Col>
            <Col span={16}>
              <InputForm label="Website" name="website" />
            </Col>
          </Row>
          <Checkbox
            checked={checkBoxObject}
            onChange={(e) => setCheckBoxObject(e.target.checked)}
          >
            Là đối tượng nội bộ
          </Checkbox>
        </Col>
      </Row>

      <TabsDefaultCustomer belongTo={valueRadio} />
    </FormModal>
  );
};

export default DefaultCustomerModal;
