import React from 'react'
import { Icon } from '@iconify/react';

const Skills = () => {
    return (
        <>
            <section id='skills' className=' mt-20'>
                <h1 className='text-4xl lg:text-6xl text-slate-300 m-5 font-mono border-b-4 border-red-400 w-max'>Skills</h1>
                <div className='flex flex-col bg-transparent p-5 gap-4' >
                    <h1 className='font-mono text-2xl text-slate-400 border-b border-slate-400 w-max'>Frontend</h1>
                    <div className='flex flex-wrap gap-4'>
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
                    </div>
                    <h1 className='font-mono text-2xl text-slate-400 border-b border-slate-400 w-max'>Backend</h1>
                    <div className='flex flex-wrap gap-4'>
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
                    </div>
                </div >
            </section >
        </>
    )
}

export default Skills