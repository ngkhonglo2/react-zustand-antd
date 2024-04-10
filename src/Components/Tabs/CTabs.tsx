import { TabPaneProps, Tabs, TabsProps } from "antd";
import React from "react";

interface TabItems extends Omit<TabPaneProps, "tab"> {
  key: string;
  label: React.ReactNode;
}

interface CTabsProps {
  tabsProps?: TabsProps;
  arrayItem: TabItems[];
}

const CTabs = ({ tabsProps, arrayItem }: CTabsProps) => {
  const items: TabItems[] = arrayItem;
  return <Tabs type="card" size="small" {...tabsProps} items={items} />;
};

export default CTabs;
