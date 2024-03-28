import { MailOutlined } from "@ant-design/icons";
import { MenuProps, Tooltip } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export const sidebarItems: MenuItem[] = [
  {
    label: <Link to={"/"}>Dashboard</Link>,
    key: "dashboard",
    icon: <MailOutlined />,
  },
  {
    label: <>Example</>,
    key: "example",
    icon: <MailOutlined />,
    children: [
      {
        label: <Link to={"/example"}>Example 1</Link>,
        key: "example1",
        icon: <MailOutlined />,
      },
      {
        label: <>Example 2</>,
        key: "example2",
        icon: <MailOutlined />,
        children: [
          {
            label: (
              <Tooltip title={"Example 3 đá sadas d đá ád ád ád á dá"}>
                <Link to={"/example"}>
                  Example 3 đá sadas d đá ád ád ád á dá
                </Link>
              </Tooltip>
            ),
            key: "example3",
            icon: <MailOutlined />,
          },
        ],
      },
    ],
  },
];
