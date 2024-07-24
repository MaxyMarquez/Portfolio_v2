import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import trendy from "../../assets/trendy.png";
import ToDoList from "../../assets/ToDoList.png";
import wordle from "../../assets/wordle.png";
import food from "../../assets/food.png";
import unearte from "../../assets/unearte.png";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="section3"
        className="grid place-content-center py-20  scroll-smooth"
      >
        <h1 className="text-4xl lg:text-5xl text-slate-300 my-5 font-mono border-b-4 border-red-400 w-max">
          {t("projects.title")}
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
                  <Icon
                    icon="devicon:redux"
                    className="w-5 h-5 bg-transparent"
                  />
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
                  <Icon
                    icon="logos:apache"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Apache
                  </span>
                </span>
              </div>
            </div>
          </picture>
        </a>

        <a
          className="lg:flex flex-col w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300"
          href="https://pi-food-app-six.vercel.app/"
          target="_blank"
        >
          <p className="text-gray-300 text-2xl bg-transparent">
            {t("projects.food")}
          </p>
          <picture className="bg-transparent w-full">
            <img
              className="lg:w-full lg:h-72 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33]"
              src={food}
              alt=""
            />
            <div className="lg:w-full mt-2 lg:mt-0 bg-transparent">
              <p className="flex font-sans text-slate-400 text-base mt-2 bg-transparent w-full">
                {t("projects.foodDescription")}
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
                  <Icon
                    icon="devicon:redux"
                    className="w-5 h-5 bg-transparent"
                  />
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
                  <Icon
                    icon="vscode-icons:file-type-node"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Node.js
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="simple-icons:express"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Express
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="logos:sequelize"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Sequelize
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="devicon:postgresql-wordmark"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    PostgreSQL
                  </span>
                </span>
              </div>
            </div>
          </picture>
        </a>

        <a
          className="lg:flex flex-col w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300"
          href="https://trendy-web-lemon.vercel.app/"
          target="_blank"
        >
          <p className="text-gray-300 text-2xl bg-transparent">
            {t("projects.trendyShop")}
          </p>
          <picture className="bg-transparent w-full">
            <img
              className="lg:w-full lg:h-72 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33]"
              src={trendy}
              alt=""
            />
            <div className="lg:w-full mt-2 lg:mt-0 bg-transparent">
              <p className="flex font-sans text-slate-400 text-base mt-2 bg-transparent w-full">
                {t("projects.trendyShopDescription")}
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
                  <Icon
                    icon="devicon:redux"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Redux
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="devicon:bootstrap"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Bootstrap
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
                  <Icon
                    icon="vscode-icons:file-type-node"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Node.js
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="simple-icons:express"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Express
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="logos:sequelize"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Sequelize
                  </span>
                </span>
                <span className="relative group bg-transparent">
                  <Icon
                    icon="devicon:postgresql-wordmark"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    PostgreSQL
                  </span>
                </span>
              </div>
            </div>
          </picture>
        </a>

        <a
          className="lg:flex w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300"
          href="https://to-do-list-maxymarquez.vercel.app/"
          target="_blank"
        >
          <picture className="bg-transparent w-full">
            <p className="font-mono text-center lg:text-left text-slate-200 text-2xl bg-transparent">
              {t("projects.ToDo")}
            </p>
            <img
              className="lg:w-full lg:h-72 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33] object-cover"
              src={ToDoList}
              alt=""
            />
            <div className="mt-2 lg:mt-0 w-full bg-transparent">
              <p className="flex font-sans text-slate-400 text-base mt-2 bg-transparent">
                {t("projects.ToDoDescription")}
              </p>
              <div className="flex justify-center lg:justify-start gap-2 mt-4 bg-transparent">
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
                  <Icon
                    icon="vscode-icons:file-type-tailwind"
                    className="w-5 h-5 bg-transparent"
                  />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Tailwind CSS
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
              </div>
            </div>
          </picture>
        </a>
        <a
          className="lg:flex w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300"
          href="https://wordle-clone-coral.vercel.app/"
          target="_blank"
        >
          <picture className="bg-transparent w-full">
            <p className="font-mono text-center lg:text-left text-slate-200 text-2xl bg-transparent">
              {t("projects.wordle")}
            </p>
            <img
              className="lg:w-full lg:h-72 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33] object-cover"
              src={wordle}
              alt=""
            />
            <div className="mt-2 lg:mt-0 w-full bg-transparent">
              <p className="flex font-sans text-slate-400 text-base mt-2 bg-transparent">
                {t("projects.wordleDescription")}
              </p>
              <div className="flex justify-center lg:justify-start gap-2 mt-4 bg-transparent">
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
                  <Icon icon="logos:sass" className="w-5 h-5 bg-transparent" />
                  <span className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Sass: Syntactically Awesome Style Sheets
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
              </div>
            </div>
          </picture>
        </a>
      </section>
    </>
  );
};

export default Projects;
