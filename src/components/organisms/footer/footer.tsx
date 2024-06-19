import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="bg-custom-blue text-custom-white mt-16">
      <div className="container mx-auto flex justify-between items-center py-10 px-10">
        <div className="mb-20">
          <h1 className="text-3xl font-bold py-5">TheraTalk AI</h1>
          <p className="text-xl mt-2">Developed by UNINUS HIMATIF Team</p>
        </div>
        <div className="flex space-x-10">
          <div>
            <h2 className="font-bold mb-2 py-3">SITEMAP</h2>
            <ul>
              <li className="py-3">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="py-3">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="py-3">
                <a href="#" className="hover:underline">
                  Articles
                </a>
              </li>
            </ul>
          </div>
          <div className="px-20">
            <h2 className="font-bold mb-2 py-3">CONTACT US</h2>
            <ul>
              <li className="py-3">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="py-3">
                <a href="#" className="hover:underline">
                  Email
                </a>
              </li>
              <li className="py-3">
                <a href="#" className="hover:underline">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
