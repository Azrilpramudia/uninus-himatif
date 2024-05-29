import { Navbar } from "@/components";
import { Hero } from "./modules";
import { FC, Fragment, ReactElement } from "react";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../template";
import { About } from "./modules/about";
import { SellingPoint } from "./modules/sellingpoint";

const LandingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <SellingPoint />
    </Fragment>
  );
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <LandingPage />,
});
