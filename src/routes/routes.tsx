import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { PageRoute } from "./pageRoutes";
import TopPage from "@/pages/TopPage";
import CommonLayout from "@/common-ui/layout/CommonLayout";
import PopulationPage from "@/pages/PopulationPage";
import { apiKeyAtomSelector } from "@/state/apiKey";
import { useAtomValue } from "jotai";
import APIConfigPage from "@/pages/APIConfigPage";
import ComparePopulationPage from "@/pages/ComparePopulationPage";

const Layout = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export const AppRoutes = () => {
  const apiKey = useAtomValue(apiKeyAtomSelector);

  const publicRoutes = [
    {
      path: PageRoute.APIConfig,
      element: <Layout />,
      children: [{ path: "", element: <APIConfigPage /> }],
    },
  ];

  const protectedRoutes = (() => {
    if (!apiKey) {
      return [];
    }

    return [
      {
        path: PageRoute.Top,
        element: <Layout />,
        children: [{ path: "", element: <TopPage /> }],
      },
      {
        path: PageRoute.Population,
        element: <Layout />,
        children: [{ path: "", element: <PopulationPage /> }],
      },
      {
        path: PageRoute.ComparePopulation,
        element: <Layout />,
        children: [{ path: "", element: <ComparePopulationPage /> }],
      },
    ];
  })();

  const routeElements = useRoutes([
    ...publicRoutes,
    ...protectedRoutes,
    { path: "*", element: <Navigate to={PageRoute.APIConfig} replace /> },
  ]);

  return <>{routeElements}</>;
};
