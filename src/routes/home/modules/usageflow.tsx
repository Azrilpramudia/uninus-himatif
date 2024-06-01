import { FC, ReactElement } from "react";

export const UsageFlow: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center space-y-4 p-20">
      <div className="text-white bg-blue-900 w-[300px] text-center text-3xl px-4 py-4 rounded font-bold">
        Galeri HIMATIF
      </div>
      <div className="flex space-x-4 p-10 gap-5">
        <div className="w-80 h-80 bg-gray-300 rounded-lg"></div>
        <div className="w-80 h-80 bg-gray-300 rounded-lg"></div>
        <div className="w-80 h-80 bg-gray-300 rounded-lg"></div>
      </div>
    </section>
  );
};
