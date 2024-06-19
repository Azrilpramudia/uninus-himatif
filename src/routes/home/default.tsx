import { Footer, Navbar } from "@/components";
import { Hero } from "./modules";
import { FC, Fragment, ReactElement } from "react";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../template";
import { About } from "./modules/about";
import { SellingPoint } from "./modules/sellingpoint";
import { UsageFlow } from "./modules/usageflow";

// eslint-disable-next-line react-refresh/only-export-components
const LandingPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <SellingPoint />
      <UsageFlow />
      <Footer />
    </Fragment>
  );
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <LandingPage />,
});
