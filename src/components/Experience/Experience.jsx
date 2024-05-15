import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useTranslation } from "react-i18next";

import unearte from "../../assets/unearte.png";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="section4" className="grid  py-20  scroll-smooth">
      <h1 className="text-4xl lg:text-5xl text-slate-300 my-5 font-mono border-b-4 border-red-400 w-max">
        {t("experience.title")}
      </h1>

      <a
        className="lg:flex flex-col w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300"
        href="https://unearte.edu.ve/"
        target="_blank"
      >
        <p className="text-gray-300 text-2xl bg-transparent">
          {t("projects.unearte")}
        </p>
        <picture className="bg-transparent w-full">
          <img
            className="lg:w-full lg:h-72 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33] object-cover"
            src={unearte}
            alt=""
          />
          <div className="lg:w-full mt-2 lg:mt-0 bg-transparent">
            <p className="flex font-sans text-slate-400 text-base mt-2 bg-transparent w-full">
              {t("projects.unearteDescription")}
            </p>
            <div className="flex justify-center lg:justify-start gap-2 mt-4 bg-transparent w-full">
              <span className="relative group bg-transparent">
                <Icon
                  icon="vscode-icons:file-type-html"
                  className="w-5 h-5 bg-transparent "
                />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700  rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 ">
                  HTML5
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon
                  icon="vscode-icons:file-type-css"
                  className="w-5 h-5 bg-transparent"
                />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  CSS3
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon
                  icon="devicon:react-wordmark"
                  className="w-5 h-5 bg-transparent"
                />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  React
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon icon="devicon:redux" className="w-5 h-5 bg-transparent" />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  Redux
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon
                  icon="devicon:javascript"
                  className="w-5 h-5 bg-transparent"
                />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  JavaScript
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon icon="logos:php" className="w-5 h-5 bg-transparent" />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  PHP
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon
                  icon="devicon:laravel-wordmark"
                  className="w-5 h-5 bg-transparent"
                />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  Laravel
                </span>
              </span>
              <span className="relative group bg-transparent">
                <Icon icon="logos:apache" className="w-5 h-5 bg-transparent" />
                <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  Apache
                </span>
              </span>
            </div>
          </div>
        </picture>
      </a>
    </section>
  );
};

export default Experience;
