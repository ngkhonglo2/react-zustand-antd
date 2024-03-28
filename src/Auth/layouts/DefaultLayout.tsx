import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const headerStyle: React.CSSProperties = {
  backgroundColor: "#4096ff",
};

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="w-screen h-screen">
      <SideBar collapsed={collapsed} />
      <Layout>
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className="p-3">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
