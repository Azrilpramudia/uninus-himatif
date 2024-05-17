import { Navbar } from "@/components";
import { Hero } from "./modules";
import { FC, ReactElement } from "react";

export const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};
