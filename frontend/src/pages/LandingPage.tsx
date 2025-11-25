import React, { useState } from 'react';
import yellowFindTasks from '../assets/yellow-find-tasks.png';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

function LandingPage() {

    const { t, i18n } = useTranslation();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const benefits = [
        t('landing.benefits.create'),
        t('landing.benefits.dashboard'),
        t('landing.benefits.gamify'),
        t('landing.benefits.supplies')
    ];

    return (
        <main className='min-h-screen p-5 lato-regular text-pretty text-indigo-900'>
            <div className=''>
                <h1 className='text-6xl'>{t('landing.title')}</h1>
                <h2 className='text-5xl mt-1 mb-10 '>{t('landing.subtitle')}</h2>
                <div className='shadow-lg p-3 md:p-7 rounded-xl md:w-1/2 bg-secondary-light/80 '>
                    <p className='text-2xl font-bold ms-2'>
                    {t('landing.intro.hook')}
                    </p>
                    <br></br>
                    <p className='text-2xl ms-2'>
                    {t('landing.intro.description')}
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='mt-5 shadow-lg p-3 md:p-7 h-fit rounded-xl text-2xl md:w-1/2 bg-secondary-light/80'>
                    <ul>
                        {benefits.map((b: string, index: number) => (
                            <div>
                                <li key={index + b.length}>• {b}</li>
                                <br></br>
                            </div>
                            
                        ))}
                    </ul>
                </div>
                <div className='w-full text-center'>
                    { isLoggedIn ? "" :
                    <NavLink to="/profile">
                        <PrimaryButton
                        children={"Log in"}
                        className={`bg-primary border-2 border-primary text-white hover:bg-secondary-light hover:border-2 hover:border-primary hover:text-primary`}
                        >
                        </PrimaryButton>
                    </NavLink>}
                </div>
                <div className='flex justify-center md:justify-end mt-5 md:ms-10 lg:me-100 w-fit h-fit'>
                        <img src={yellowFindTasks} />
                </div>
            </div>
        </main>
    )
}

export default LandingPage