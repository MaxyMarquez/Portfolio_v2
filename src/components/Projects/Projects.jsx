import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import trendy from '../../assets/trendy.png';
import ToDoList from '../../assets/ToDoList.png';

const Projects = () => {
    const { t } = useTranslation();
    return (
        <>
            <section id='section3' className='grid place-content-center py-20  scroll-smooth'>
                <h1 className='text-4xl lg:text-5xl text-slate-300 m-5 font-mono border-b-4 border-red-400 w-max'>
                    {t('projects.title')}
                </h1>

                <a
                    className='lg:flex gap-7 w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300'
                    href='https://trendy-web-lemon.vercel.app/'
                    target='_blank'
                >
                    <picture className='bg-transparent'>
                        <img className='lg:w-52 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33]' src={trendy} alt='' />
                    </picture>
                    <div className='lg:w-3/4 mt-2 lg:mt-0 w-full bg-transparent'>
                        <h1 className='font-mono text-center lg:text-left text-slate-200 text-2xl bg-transparent'>
                            {t('projects.trendyShop')}
                        </h1>
                        <p className='flex font-sans text-slate-400 text-base mt-2 bg-transparent'>
                            {t('projects.trendyShopDescription')}
                        </p>
                        <div className='flex justify-center lg:justify-start gap-2 mt-4 bg-transparent'>
                            <span className='relative group bg-transparent'>
                                <Icon icon="vscode-icons:file-type-html" className='w-5 h-5 bg-transparent ' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700  rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 ">
                                    HTML5
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="vscode-icons:file-type-css" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    CSS3
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:react-wordmark" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    React
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:redux" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    Redux
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:bootstrap" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    Bootstrap
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:javascript" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    JavaScript
                                </span>
                            </span>

                            <span className='relative group bg-transparent'>
                                <Icon icon="vscode-icons:file-type-node" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    Node.js
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="logos:sequelize" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    Sequelize
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:postgresql-wordmark" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    PostgreSQL
                                </span>
                            </span>
                        </div>
                    </div>
                </a>

                <a
                    className='lg:flex gap-7 w-full p-4 hover:bg-[#ffffff33] rounded border border-transparent duration-300'
                    href='https://to-do-list-maxymarquez.vercel.app/'
                    target='_blank'
                >
                    <picture className='bg-transparent'>
                        <img className='lg:w-52 lg:h-32 border-2 rounded-md border-slate-500 mt-2 bg-[#ffffff33]' src={ToDoList} alt='' />
                    </picture>
                    <div className='lg:w-3/4 mt-2 lg:mt-0 w-full bg-transparent'>
                        <h1 className='font-mono text-center lg:text-left text-slate-200 text-2xl bg-transparent'>
                            {t('projects.ToDo')}
                        </h1>
                        <p className='flex font-sans text-slate-400 text-base mt-2 bg-transparent'>
                            {t('projects.ToDoDescription')}
                        </p>
                        <div className='flex justify-center lg:justify-start gap-2 mt-4 bg-transparent'>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:react-wordmark" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    React
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="vscode-icons:file-type-tailwind" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    Tailwind CSS
                                </span>
                            </span>
                            <span className='relative group bg-transparent'>
                                <Icon icon="devicon:javascript" className='w-5 h-5 bg-transparent' />
                                <span
                                    className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                    JavaScript
                                </span>
                            </span>


                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Projects