import React from 'react';
import yellowFindTasks from '../assets/yellow-find-tasks.png';
import { Link } from 'react-router-dom';

function LandingPage() {


    const benefits: string[] = [
        "Create tasks in a snap. Assign chores to your housemates and share the load with a single tap.",
        "See your house at a glance. Your smart dashboard shows who's doing what, what's up next, and when it's done.",
        "Make chores a game, not a war. Complete missions, earn badges, and turn cleaning into a friendly competition.",
        "Never run out of soap again. Track shared supplies and add essentials like trash bags or sponges to a central shopping list."
    ]

    return (
        <main className='h-screen p-5 lato-regular text-pretty text-indigo-900'>
            <div className=''>
                <h1 className='text-6xl'>Check Mate</h1>
                <h2 className='text-5xl mt-1 mb-10'>Dishes done, arguments gone.</h2>
                <div className='shadow-lg p-3 md:p-7 rounded-xl md:w-1/2 bg-emerald-100'>
                    <p className='text-2xl font-bold ms-2'>Tired of chore wars? With Check Mate,
                        your only drama is on the TV.</p>
                    <p className='text-2xl ms-2'>Stop passive-aggressive notes with active, shared tasks.
                        Discover the new way of organising your house chores.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='mt-5 shadow-lg p-3 md:p-7 h-fit rounded-xl text-2xl md:w-1/2'>
                    <ul>
                        {benefits.map((b: string, index: number) => (
                            <li key={index + b.length}>• {b}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-center md:justify-end mt-5 md:ms-10 lg:me-100 w-fit h-fit'>
                        <img src={yellowFindTasks} />
                </div>
            </div>
        </main>
    )
}

export default LandingPage