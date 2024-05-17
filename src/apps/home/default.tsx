import { Navbar } from "@/components";
import { FC, ReactElement } from "react";
import { Hero } from "./modules";

export const LandingPage: FC = (): ReactElement => {
    return (
        <>
        <Navbar/>
        <Hero/>
        </>
    )
}