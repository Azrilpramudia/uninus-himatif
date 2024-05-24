import { Navbar } from "@/components";
import { Hero } from "./modules";
import { FC, ReactElement } from "react";
import { About } from "./modules/about";

export const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};
