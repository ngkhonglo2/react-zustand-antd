import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { sidebarItems } from "./ItemRouter";

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);

  return key;
};

const levelKeys = getLevelKeys(sidebarItems as LevelKeysProps[]);
interface SideBarProps {
  collapsed: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState([Object.keys(levelKeys)[0]]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );

    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          mode="inline"
          defaultSelectedKeys={stateOpenKeys}
          // openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          items={sidebarItems}
        />
      </Sider>
    </>
  );
};

export default SideBar;
