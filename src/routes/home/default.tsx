import { Navbar } from "@/components";
import { Hero } from "./modules";
import { FC, Fragment, ReactElement } from "react";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../template";

const LandingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <LandingPage />,
});
