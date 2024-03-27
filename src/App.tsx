import { Button, ConfigProvider } from "antd";
import "./App.css";

function App() {
  return (
    <>
      <ConfigProvider direction="rtl">
        <Button>My Button</Button>
      </ConfigProvider>
    </>
  );
}

export default App;
