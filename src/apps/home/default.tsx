import { Navbar } from "@/components";
import { FC, ReactElement } from "react";
import { Hero } from "@/routes/home/modules/hero";
import { About } from "@/routes/home/modules/about";
import { SellingPoint } from "@/routes/home/modules/sellingpoint";
import { UsageFlow } from "@/routes/home/modules/usageflow";

export const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SellingPoint />
      <UsageFlow />
    </>
  );
};
