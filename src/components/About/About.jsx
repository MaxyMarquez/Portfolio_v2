import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id='about' className='flex mt-10 lg:mt-0 lg:h-screen '>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-slate-400 text-base mt-3'>{t('about.paragraph1')}</p>
                    <p className='text-slate-400 text-base mt-3'>{t('about.paragraph2')}</p>
                    <p className='text-slate-400 text-base mt-3'>{t('about.paragraph3')}</p>
                    <p className='text-slate-400 text-base mt-3'>{t('about.paragraph4')}</p>
                </div>
            </section>
        </>
    );
};

export default About;
