import React, { useState, useTransition } from 'react'
import TaskCard from '../components/TaskCard';
import type { Task } from '../types/Task';
import { Weekdays } from '../types/Task';
import { useTranslation } from 'react-i18next';
import PrimaryButton from '../components/PrimaryButton';
import { Navigate, NavLink } from 'react-router-dom';


function DashboardPage() {

    const { t } = useTranslation();
    const days: Weekdays[] = Object.values(Weekdays);

    const dummyTasks: Task[] = [
        { id: "123e4567-e89b-12d3-a456-426614174000", day: Weekdays.MONDAY, title: "Buy munchies" },
        { id: "123e4567-e89b-12d3-a456-426614174001", day: Weekdays.MONDAY, title: "Gym" },
        { id: "123e4567-e89b-12d3-a456-426614174002", day: Weekdays.WEDNESDAY, title: "Feed cat" },
        { id: "123e4567-e89b-12d3-a456-426614174003", day: Weekdays.FRIDAY, title: "Push to remote repo" },
    ];

    // const openTaskModal = () => {
    //     Navigate
    // }

    return (
        <main className='w-full p-5 h-full'>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-5
            h-auto md:h-[calc(100vh-120px)] items-stretch
            w-full'>
                {days.map((day) => (
                    <div
                        key={day}
                        className="bg-slate-50 rounded-xl border border-slate-200
                        flex flex-col shadow-sm min-h-[200px]">
                        <h2 className="bg-indigo-900 text-white p-2 text-center font-bold rounded-t-xl uppercase text-sm tracking-wider">
                            {t(`weekdays.${day}`)}
                        </h2>
                        <div className="p-2 flex-1 flex flex-col gap-2 overflow-y-auto">
                            {dummyTasks
                                .filter(t => t.day === day)
                                .map((task: Task, i) => (
                                    <div key={i}>
                                        <TaskCard
                                            task={task}
                                        />
                                    </div>
                                ))}
                        </div>
                        <NavLink to={"/new-task"}>
                            <button
                            // onClick={openTaskModal}
                            className="w-full text-center text-gray-400 text-xs mt-2 p-2
                            border-2 border-dashed border-gray-200 rounded
                            hover:border-gray-500 hover:text-indigo-900 hover:bg-indigo-100">
                                + Add task
                            </button>
                        </NavLink>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default DashboardPage