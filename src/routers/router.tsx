import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTER_NAME } from "../constant/router.constant";

const DefaultLayout = lazy(() => import("../Auth/layouts/DefaultLayout"));

const DashboardPage = lazy(() => import("../pages/Dashboard"));
const SignInPage = lazy(() => import("../Auth/SignIn"));
const ExamplePage = lazy(() => import("../pages/Example"));
const ExampleTable = lazy(() => import("../pages/Example/ExampleTable"))

const Loading = () => (
  <Spin
    className="!flex h-full w-full items-center justify-center"
    size="large"
  />
);
export const router = () =>
  createBrowserRouter([
    {
      path: "/",
      // element: <Root />,
      // loader: rootLoader,
      children: [
        {
          element: (
            <Suspense fallback={<Loading />}>
              <DefaultLayout />
            </Suspense>
          ),
          children: [
            {
              path: ROUTER_NAME.SIGN_IN,
              element: (
                <Suspense fallback={<Loading />}>
                  <SignInPage />
                </Suspense>
              ),
            },
            {
              path: ROUTER_NAME.DASHBOARD,
              element: (
                <Suspense fallback={<Loading />}>
                  <DashboardPage />
                </Suspense>
              ),
              // loader: teamLoader,
            },
            {
              path: ROUTER_NAME.EXAMPLE,
              element: (
                <Suspense fallback={<Loading />}>
                  <ExamplePage />
                </Suspense>
              ),
            },
            {
              path: "/example-table",
              element: (
                <Suspense fallback={<Loading />}>
                  <ExampleTable />
                </Suspense>
              ),
            },
            {
              path: "/example-3",
              element: (
                <Suspense fallback={<Loading />}>
                  <ExamplePage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);
