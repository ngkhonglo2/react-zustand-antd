import { Form, FormItemProps, Select, SelectProps } from "antd";

interface SelectFormProps {
  name?: string | any[];
  label?: string;
  selectProps?: SelectProps;
  formItemProps?: FormItemProps;
}

const SelectForm = ({
  name,
  label,
  selectProps,
  formItemProps,
}: SelectFormProps) => {
  return (
    <Form.Item name={name} label={label} {...formItemProps}>
      <Select style={{ width: "100%" }} {...selectProps} />
    </Form.Item>
  );
};

export default SelectForm;
