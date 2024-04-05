import { Form, FormItemProps, Input, InputProps } from "antd";

interface InputFormProps {
  name?: string | any[];
  label?: string;
  inputProps?: InputProps;
  formItemProps?: FormItemProps;
}

const InputForm = ({
  name,
  label,
  inputProps,
  formItemProps,
}: InputFormProps) => {
  return (
    <Form.Item name={name} label={label} {...formItemProps}>
      <Input {...inputProps} />
    </Form.Item>
  );
};

export default InputForm;
