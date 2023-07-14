import React, { Suspense, lazy } from "react";
import { Layout } from "components";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "routes";

const appRoutes = (routes) => {
  return routes.map((route, key) => (
    <React.Fragment key={key}>
      <Route
        path={route.path}
        element={<Suspense fallback="loading...">{route.element}</Suspense>}
      />
      {route.children && appRoutes(route.children)}
    </React.Fragment>
  ));
};

const routesWrapper = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Not Found</div>} />
      <Route path="/" element={<Layout />}>
        {appRoutes(privateRoutes)}
      </Route>
    </Routes>
  );
  // return <Routes>{appRoutes(privateRoutes)}</Routes>;
};

export default routesWrapper;
