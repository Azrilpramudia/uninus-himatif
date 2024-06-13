import { FC, ReactElement } from "react";

export const Hero: FC = (): ReactElement => {
  return (
    <section className="flex w-full min-h-2 items-center justify-center gap-x-56 px-16 bg-custom-white">
      <div className="w-1/2">
        <h2 className="font-bold text-4xl mb-3">GLORY HIMATIF</h2>
        <p>Welcome to Himpunan Mahasiswa Teknik Informatika</p>
        <p className="mb-6">Universitas Islam Nusantara</p>
        <button className="bg-custom-blue py-1 px-3 text-center text-white font-semibold rounded">
          Masuk
        </button>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src="/Logo.png" className="w-[400px]" alt="Himatif" />
      </div>
    </section>
  );
};
