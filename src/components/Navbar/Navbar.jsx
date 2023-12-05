import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LenguageSelector/LenguageSelector';

const Navbar = ({ targetIds }) => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            for (const id of targetIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [targetIds]);

    return (
        <>
            <header className='lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:w-full lg:py-24'>
                <LanguageSelector />
                <div>
                    <h1 className='text-5xl text-slate-200 font-mono'>{t('name')}</h1>
                    <h2 className='text-3xl text-slate-400 font-mono mt-2'>{t('role')}</h2>

                    <nav className='hidden lg:block'>
                        <ul className='mt-16 w-max'>
                            {targetIds.map((id) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className={`group flex items-center py-3`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(id);
                                            if (element) {
                                                window.scrollTo({
                                                    top: element.offsetTop,
                                                    behavior: 'smooth',
                                                });
                                            }
                                        }}
                                    >
                                        <span
                                            className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${id === activeSection ? 'mr-4 h-px w-16 bg-white ' : 'bg-slate-500 w-8'
                                                }`}></span>
                                        <span
                                            className={`font-mono text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${id === activeSection ? 'text-white ' : 'text-slate-500'
                                                }`}>
                                            {t(id)}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='flex  gap-4 mt-2 lg:mt-0'>
                    <a href='https://github.com/MaxyMarquez' target='_blank' className='group'>
                        <FaGithub className='w-6 h-6 text-slate-500 group-hover:text-white duration-200' />
                    </a>
                    <a href='https://www.linkedin.com/in/maximiliano-marquez-519274183/' target='_blank' className='group'>
                        <FaLinkedinIn className='w-6 h-6 text-slate-500 group-hover:text-white duration-200' />
                    </a>
                    <a href='mailto:maxy.marquez90@gmail.com' target='_blank' className='group'>
                        <FaAt className='w-6 h-6 text-slate-500 group-hover:text-white duration-200' />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Navbar;
