import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const DefaultLayout = lazy(() => import("../Auth/layouts/DefaultLayout"));

const DashboardPage = lazy(() => import("../pages/Dashboard"));
const SignInPage = lazy(() => import("../Auth/SignIn"));
const ExamplePage = lazy(() => import("../pages/Example"));

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
              path: "/",
              element: (
                <Suspense fallback={<Loading />}>
                  <DashboardPage />
                </Suspense>
              ),
              // loader: teamLoader,
            },
            {
              path: "/sign-in",
              element: (
                <Suspense fallback={<Loading />}>
                  <SignInPage />
                </Suspense>
              ),
            },
            {
              path: "/example",
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
