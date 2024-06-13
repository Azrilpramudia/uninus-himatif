import { FC, ReactElement } from "react";

export const SellingPoint: FC = (): ReactElement => {
  return (
    <section className="p-8">
      <h2 className="px-9 text-4xl font-bold mb-4 text-custom-blue">Program Kerja</h2>
      <p className="px-9 mb-8">Berikut Program Kerja Periode Kepengurusan 2024 - 2025</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-9">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-custom-blue">Melakukan Penilaian Diri</h3>
          <p>
            Pahami kondisi mental Anda dengan menyelesaikan tes dan kuestioner yang mudah digunakan.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-custom-blue">Mendapatkan Analisis AI</h3>
          <p>
            Dapatkan saran yang dipersonalisasi berdasarkan data diri dan keluhan Anda, dianalisis
            dengan teknologi AI canggih.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-custom-blue">Temukan Bantuan Professional</h3>
          <p>
            Temukan faskes dan psikolog terdekat yang sesuai dengan kebutuhan Anda dengan mudah.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-custom-blue">Pelajari Lebih Dalam</h3>
          <p>Akses informasi dan edukasi terpercaya tentang berbagai topik kesehatan mental.</p>
        </div>
      </div>
    </section>
  );
};
