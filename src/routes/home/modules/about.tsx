import { FC, ReactElement } from "react";

export const About: FC = (): ReactElement => {
  return (
    <section className="py-20 flex w-fullflex w-full min-h-2 items-center justify-center gap-x-30 px-12">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl mb-4 text-[#020181]">TENTANG KAMI</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Unde mollitia animi quod amet, nemo laborum ea totam minima incidunt,</p>
        <p>accusamus voluptates dolor facere veritatis voluptate architecto hic.</p>
        <p> Nemo, necessitatibus ad.</p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src="/about.png" className="w-[400px]" alt="about" />
      </div>
    </section>
  );
};
