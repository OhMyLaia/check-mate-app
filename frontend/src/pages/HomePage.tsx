import React, { useState } from 'react'
import TaskCard from '../components/TaskCard';
import type { Task, Days } from '../types/Task';


function HomePage() {


    const days: Days[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const dummyTasks: Task[] = [
        { id: "1", day: "Monday", title: "Buy munchies" },
        { id: "2", day: "Monday", title: "Gym" },
        { id: "3", day: "Wednesday", title: "Feed cat" },
        { id: "4", day: "Friday", title: "Push to remote repo" },
    ];

    return (
        <main className='w-full p-5 h-full'>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-5
            h-auto md:h-[calc(100vh-120px)] items-stretch
            w-full'>
                
                {days.map((day) => (
                    <div
                        key={day}
                        className="bg-slate-50 rounded-xl border border-slate-200 flex flex-col shadow-sm min-h-[200px]"
                    >
                        <div className="bg-indigo-900 text-white p-2 text-center font-bold rounded-t-xl uppercase text-sm tracking-wider">
                            {day}
                        </div>
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
                        <div className="text-center text-gray-400 text-xs mt-2 p-2 border-2 border-dashed border-gray-200 rounded hover:border-gray-400 hover:bg-orange-300">
                            + Add Task
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default HomePage