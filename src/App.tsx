import { ConfigProvider } from "antd";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";

function App() {
  return (
    <ConfigProvider direction="ltr">
      <RouterProvider router={router()} />
    </ConfigProvider>
  );
}

export default App;
