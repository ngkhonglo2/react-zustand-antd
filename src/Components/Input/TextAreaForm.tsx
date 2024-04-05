import { Form, FormItemProps } from "antd";
import TextArea, { TextAreaProps } from "antd/es/input/TextArea";

interface TextAreaFormProps {
  name?: string | any[];
  label?: string;
  textAreaProps?: TextAreaProps;
  formItemProps?: FormItemProps;
}

const TextAreaForm = ({
  name,
  label,
  textAreaProps,
  formItemProps,
}: TextAreaFormProps) => {
  return (
    <Form.Item name={name} label={label} {...formItemProps}>
      <TextArea {...textAreaProps} />
    </Form.Item>
  );
};

export default TextAreaForm;
