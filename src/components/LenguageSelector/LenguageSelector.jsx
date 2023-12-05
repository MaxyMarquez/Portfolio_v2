import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='flex gap-3 my-5 lg:my-0'>
            <button onClick={() => changeLanguage('en')}><Icon icon="emojione-v1:flag-for-united-kingdom" className='w-7 h-7' /></button>
            <button onClick={() => changeLanguage('es')}><Icon icon="emojione-v1:flag-for-spain" className='w-7 h-7' /></button>
        </div>
    );
}

export default LanguageSelector
