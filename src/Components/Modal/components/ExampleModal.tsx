import { Button, Flex, Form, Input, Space, Table, TableProps } from "antd";
import FormModal from "../FormModal";
// import { validateEmail, validatePhone } from "../../../common/Validate";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";

interface ExampleModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExampleModal = ({ isModalOpen, setIsModalOpen }: ExampleModalProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const columnForm: (
    remove: (index: number | number[]) => void
  ) => TableProps<any>["columns"] = (remove) => [
    {
      title: "First",
      dataIndex: "name",
      render: (name) => {
        return (
          <Form.Item
            noStyle
            name={[name, "first"]}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Second",
      dataIndex: "name",
      render: (name) => {
        return (
          <Form.Item noStyle name={[name, "second"]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "name",
      render: (name) => {
        return (
          <CloseOutlined
            onClick={() => {
              remove(name);
            }}
          />
        );
      },
    },
  ];

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
      {/* <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        validateDebounce={500}
        rules={[{ required: true }, { validator: validatePhone }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        validateDebounce={500}
        rules={[{ required: true }, { validator: validateEmail }]}
      >
        <Input />
      </Form.Item> */}
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
            {fields.map((field) => {
              return (
                <Space key={field.key}>
                  <Form.Item noStyle name={[field.name, "first"]}>
                    <Input placeholder="first" />
                  </Form.Item>
                  <Form.Item noStyle name={[field.name, "second"]}>
                    <Input placeholder="second" />
                  </Form.Item>
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              );
            })}
            <Flex>
              <Button type="dashed" onClick={() => add()}>
                + Add Item
              </Button>
            </Flex>
          </div>
        )}
      </Form.List>

      <Form.List name="itemsTable">
        {(fields, { add, remove }) => (
          <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
            <Table
              columns={columnForm(remove)}
              dataSource={fields}
              pagination={false}
              bordered={true}
            />
            <Flex>
              <Button type="dashed" onClick={() => add()}>
                + Add Item
              </Button>
            </Flex>
          </div>
        )}
      </Form.List>
    </FormModal>
  );
};

export default ExampleModal;
