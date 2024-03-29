import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { sidebarItems } from "./ItemRouter";
import { useLocation } from "react-router-dom";
interface SideBarProps {
  collapsed: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed }) => {
  const { pathname } = useLocation();

  const [stateOpenKeys, setStateOpenKeys] = useState([""]);

  //luôn open
  // const newOpenKey: any = sidebarItems.map((item) => item?.key) ?? [""];
  const newOpenKey = [""];

  const onClick: MenuProps["onClick"] = (e) => {
    setStateOpenKeys([e.key]);
  };
  useEffect(() => {
    setStateOpenKeys([pathname]);
  }, [pathname]);

  return (
    <>
      <div className="overflow-auto bg-white scrollbarNone">
        <Sider
          trigger={<>hello</>}
          collapsible
          collapsed={collapsed}
          className="!bg-white"
          collapsedWidth={80}
          width={240}
        >
          <Menu
            mode="inline"
            selectedKeys={stateOpenKeys}
            defaultOpenKeys={newOpenKey}
            onClick={onClick}
            items={sidebarItems}
          />
        </Sider>
      </div>
    </>
  );
};

export default SideBar;
