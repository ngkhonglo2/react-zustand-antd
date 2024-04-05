import { Form, Table, TableProps } from "antd";
import { FormListProps } from "antd/es/form";

interface DynamicFormListTableProps {
  columnForm: (
    remove: (index: number | number[]) => void
  ) => TableProps<any>["columns"];
  DynamicSubmitForm: (
    add: (defaultValue?: any, insertIndex?: number | undefined) => void
  ) => React.ReactNode;
  formListProps?: FormListProps;
  nameFormList: string;
  propsTable?: TableProps;
  location?: "top" | "bottom";
}

const DynamicFormListTable = ({
  columnForm,
  propsTable,
  DynamicSubmitForm,
  formListProps,
  nameFormList,
  location = "top",
}: DynamicFormListTableProps) => {
  return (
    <Form.List name={nameFormList} {...formListProps}>
      {(fields, { add, remove }) => (
        <div className="flex flex-col gap-4">
          {location === "top" && DynamicSubmitForm(add)}
          <Table
            columns={columnForm(remove)}
            dataSource={fields}
            pagination={false}
            bordered={true}
            {...propsTable}
          />
          {location === "bottom" && DynamicSubmitForm(add)}
        </div>
      )}
    </Form.List>
  );
};

export default DynamicFormListTable;
