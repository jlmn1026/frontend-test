import { Outlet, useRoutes } from "react-router-dom";
import { PageRoute } from "./pageRoutes";
import TopPage from "@/pages/TopPage";
import CommonLayout from "@/common-ui/layout/CommonLayout";

const Layout = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export const AppRoutes = () => {
  // const auth = useAuth();

  const publicRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: PageRoute.Top, element: <TopPage /> }],
    },
  ];

  // const protectedRoutes = [
  //   {
  //     path: '/app',
  //     element: <App />,
  //     children: [
  //       { path: '/users', element: <Users /> },
  //     ],
  //   },
  // ];

  const element = useRoutes([...publicRoutes]);

  return <>{element}</>;
};
