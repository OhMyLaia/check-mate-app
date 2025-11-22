import { randomUUID } from 'crypto'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton';
import GenericSelect from '../components/GenericSelect';
import { HouseTask, Task } from '../types/Task';
import { User } from '../types/User';

function NewTaskPage() {

    const [task, setTask] = useState<HouseTask | "">("");
    const [assignee, setAssignee] = useState<User | "">("");


    const taskOptions: HouseTask[] = Object.values(HouseTask);
    const userOptions: User[]

    return (
        <main className='p-4 flex flex-col justify-start items-center w-full text-indigo-900'>
            <h2 className='text-center lato-regular'>New custom task</h2>
            <div className='bg-emerald-50 h-1/3 w-3/4 shadow-lg m-5'>
                <form className='flex flex-col gap-y-4 w-full p-5'>
                    <label htmlFor="task_id" className="font-medium"> Task </label>
                    <input
                        className="w-full border border-emerald-400 rounded-xl bg-white p-3"
                        type="text"
                        id="task_id"
                        name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    />
                    <label htmlFor="description" className="font-medium"> Description </label>
                    <textarea
                        className="w-full border border-emerald-400 rounded-xl bg-white p-3"
                        id="description_id"
                        name="description"
                        placeholder='Remember to...'
                    // value={formData.content}
                    // onChange={handleChange}
                    />
                    <label htmlFor="task_id" className="font-medium"> Assign to </label>
                    <GenericSelect
                        label="task"
                        value={task}
                        options={taskOptions}
                        onChange={setTask}
                        translationPrefix='tasks_list'
                    />
                    <label htmlFor="task_id" className="font-medium"> Select a task </label>
                    <GenericSelect
                        label="task"
                        value={task}
                        options={taskOptions}
                        onChange={setTask}
                        translationPrefix='tasks_list'
                    />
                    <PrimaryButton
                        // isLoading={isLoading}
                        type={"submit"}
                        children={"Submit"}
                        className={`${"bg-indigo-900 text-white"}`}
                    />
                </form>
            </div>
        </main>
    )
}

export default NewTaskPage;