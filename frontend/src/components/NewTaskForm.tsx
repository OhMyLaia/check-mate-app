import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton';
import GenericSelect from '../components/GenericSelect';
import { User } from '../types/User';
import { userNamesList } from '../utils/mock_data/mock_users_households';
import { HouseTask, PriorityLevel, Task, Weekdays } from '../types/Task';
import { Penalty, allPenaltyDescriptions } from '../types/Penalty';
import { Navigate, NavLink } from 'react-router-dom';

function NewTaskForm() {

    const [task, setTask] = useState<HouseTask | "">("");
    const [assignee, setAssignee] = useState<string>("");
    const [priority, setPriority] = useState<PriorityLevel | "">("");
    const [penalty, setPenalty] = useState("");
    const [day, setDay] = useState<Weekdays | "">("");
    const [text, setText] = useState<string>("");


    const taskOptions: HouseTask[] = Object.values(HouseTask);
    const priorityOptions: PriorityLevel[] = Object.values(PriorityLevel);
    const weekdaysOptions: Weekdays[] = Object.values(Weekdays);
    const penaltyOptions: string[] = Object.values(allPenaltyDescriptions);

    function handleTextAreaChange(event) {
        const value = event.target.value;
        if (value.length <= 300) {
            setText(value);
        }
    }
    return (
        <div className='p-4 flex flex-col justify-start items-center w-full text-primary'>
            <h2 className='text-center lato-regular text-3xl'>New custom task</h2>
            <div className='bg-secondary-light/80 h-1/3 w-3/4 shadow-lg m-5 rounded'>
                <form className='flex flex-col gap-y-4 w-full p-5'>

                    <label htmlFor="task_id" className="font-medium"> Select a task </label>
                    <GenericSelect
                        label="task"
                        value={task}
                        options={taskOptions}
                        onChange={setTask}
                        translationPrefix='tasks_list'
                    />

                    {task === HouseTask.OTHER ? <div>
                        <label htmlFor="task_id" className="font-thin"> Can't find it? Create a custom task </label>
                        <input
                            className="w-full border border-secondary rounded-xl bg-white p-3"
                            type="text"
                            id="task_id"
                            name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                        />
                    </div>
                        : ""}

                    <label htmlFor="description" className="font-medium"> Description </label>
                    <textarea
                        className="w-full border border-secondary rounded-xl bg-white p-3"
                        id="description_id"
                        name="description"
                        placeholder='Remember to...'
                        onChange={handleTextAreaChange}
                        maxLength={300}
                    // value={formData.content}
                    // onChange={handleChange}
                    />
                    <span className='text-sm text-end'>{`${text.length}/300`}</span>
                    <label htmlFor="assignee_id" className="font-medium"> Assign to </label>
                    <GenericSelect
                        label="assignee"
                        value={assignee}
                        options={userNamesList}
                        onChange={(newValue) => setAssignee(newValue)}
                    />

                    <label htmlFor="weekday_id" className="font-medium"> Day </label>
                    <GenericSelect
                        label="weekday"
                        value={day}
                        options={weekdaysOptions}
                        onChange={(newValue) => setDay(newValue)}
                    />

                    <label htmlFor="priority_id" className="font-medium"> Priority </label>
                    <GenericSelect
                        label="priority"
                        value={priority}
                        options={priorityOptions}
                        onChange={(newValue) => setPriority(newValue)}
                    />

                    <label htmlFor="penalty_id" className="font-medium"> Penalty </label>
                    <GenericSelect
                        label="penalty"
                        value={penalty}
                        options={penaltyOptions}
                        onChange={(newValue) => setPenalty(newValue)}
                    />
                    <div className='w-fit'>
                    <NavLink to={"/home"}>
                        <PrimaryButton
                            // isLoading={isLoading}
                            type={"submit"}
                            children={"Submit"}
                            className={`${"bg-primary border-2 border-primary text-white hover:bg-secondary hover:border-2 hover:border-primary hover:text-primary"}`}
                        />
                    </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTaskForm