import { MailOutlined } from "@ant-design/icons";
import { MenuProps, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { ROUTER_NAME } from "../../../constant/router.constant";

type MenuItem = Required<MenuProps>["items"][number];

export const sidebarItems: MenuItem[] = [
  {
    label: (
      <Tooltip title={"Dashboard"}>
        <Link to={ROUTER_NAME.DASHBOARD}>Dashboard</Link>
      </Tooltip>
    ),
    key: ROUTER_NAME.DASHBOARD,
    icon: <MailOutlined />,
  },
  {
    label: <>Example</>,
    key: ROUTER_NAME.EXAMPLE,
    icon: <MailOutlined />,
    children: [
      {
        label: (
          <Tooltip title={"Example"}>
            <Link to={ROUTER_NAME.EXAMPLE}>Example</Link>
          </Tooltip>
        ),
        key: ROUTER_NAME.EXAMPLE,
        icon: <MailOutlined />,
      },
      {
        label: <Link to={"/example-table"}>Example table</Link>,
        key: "/example-table",
        icon: <MailOutlined />,
      },
      // {
      //   label: <>Example 2</>,
      //   key: "example 2",
      //   icon: <MailOutlined />,
      //   children: [
      //     {
      //       label: (
      //         <Tooltip title={"Example 3"}>
      //           <Link to={"/example-3"}>Example 3</Link>
      //         </Tooltip>
      //       ),
      //       key: "/example-3",
      //       icon: <MailOutlined />,
      //     },
      //   ],
      // },
    ],
  },
];
