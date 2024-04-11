import { DatePicker, Form, FormItemProps } from "antd";
import { DatePickerProps } from "antd/es/date-picker";

interface DatePickerFormProps {
  name?: string | any[];
  label?: string;
  dateProps?: DatePickerProps;
  formItemProps?: FormItemProps;
}

const DatePickerForm = ({
  name,
  label,
  dateProps,
  formItemProps,
}: DatePickerFormProps) => {
  return (
    <Form.Item name={name} label={label} {...formItemProps}>
      <DatePicker style={{ width: "100%" }} {...dateProps} />
    </Form.Item>
  );
};

export default DatePickerForm;
