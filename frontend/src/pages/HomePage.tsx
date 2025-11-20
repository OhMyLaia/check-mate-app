import React from 'react'

function HomePage() {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const dummyTasks = [
        { day: "Monday", title: "Buy munchies" },
        { day: "Monday", title: "Gym" },
        { day: "Wednesday", title: "Feed cat" },
        { day: "Friday", title: "Party" },
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
                                .map((task, i) => (
                                    <div key={i} className="bg-white p-3 shadow-sm rounded-md border-l-4 border-emerald-400 text-sm text-slate-700 hover:shadow-md transition-shadow cursor-pointer">
                                        <p>{task.title}</p>
                                        <button>Done</button>
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