import React from 'react'
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    return (
        <>
            <section id='section2' className='pt-20'>
                <h1 className='text-4xl lg:text-5xl text-slate-300 my-5 font-mono border-b-4 border-red-400 w-max'>
                    {t('skills.title')}
                </h1>
                <div className='flex flex-col bg-transparent py-5' >
                    <div className='flex flex-wrap gap-7'>
                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-html" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700  rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 ">
                                HTML5
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-css" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                CSS3
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:react-wordmark" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                React
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:redux" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Redux
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:bootstrap" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Bootstrap
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-tailwind" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Tailwind CSS
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="logos:sass" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Sass: Syntactically Awesome Style Sheets
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:javascript" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                JavaScript
                            </span>
                        </span>

                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-node" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Node.js
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="simple-icons:express" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Express
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="logos:sequelize" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Sequelize
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:postgresql-wordmark" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                PostgreSQL
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:github" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Github
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="logos:trello" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Trello
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="logos:taiga" className='w-10 h-10 lg:w-20 lg:h-20 group-hover:scale-125 group-hover:-rotate-2 duration-300' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Taiga
                            </span>
                        </span>
                    </div >
                </div >
            </section >
        </>
    )
}

export default Skills