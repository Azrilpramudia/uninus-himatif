import { Button } from "@/components";
import { Navbar } from "@/components/organisms/navbar/navbar";
import { FC, Fragment, ReactElement } from "react";

export const Homepage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <Button>Button</Button>
    </Fragment>
  );
};
