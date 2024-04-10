import { Form, FormItemProps, InputNumber, InputNumberProps } from "antd";

interface InputFormProps {
  name?: string | any[];
  label?: string;
  inputProps?: InputNumberProps;
  formItemProps?: FormItemProps;
}

const InputNumberForm = ({
  name,
  label,
  inputProps,
  formItemProps,
}: InputFormProps) => {
  return (
    <Form.Item name={name} label={label} {...formItemProps}>
      <InputNumber style={{ width: "100%" }} {...inputProps} />
    </Form.Item>
  );
};

export default InputNumberForm;
