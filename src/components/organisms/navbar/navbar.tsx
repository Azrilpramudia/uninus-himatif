import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { FC, ReactElement, useState } from "react";

export const Navbar: FC = (): ReactElement => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <header className="flex md:px-6 relative bg-gray-200 w-full h-20">
      <section className="flex w-full px-2 justify-between items-center">
        <figure className="flex items-center gap-x-2 font-bold text-black text-3xl">
          <figcaption>HIMATIF UNINUS</figcaption>
        </figure>
        <nav>
          <div
            onClick={() => {
              setNavMenu(!navMenu);
            }}
          >
            <Icon icon="game-icons:hamburger-menu" width={24} className="text-black md:hidden" />
          </div>
          <ul className="hidden md:flex gap-x-10 items-center justify-center text-black text-xl">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>News</Link>
            <Link to={"/"}>Articles</Link>
          </ul>
        </nav>
      </section>
      {navMenu ? (
        <div className="h-32 py-2 w-full bg-gray-200 mt-20 absolute">
          <ul className="flex flex-col gap-y-3 items-center justify-center text-white text-xl">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>News</Link>
            <Link to={"/"}>Articles</Link>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
