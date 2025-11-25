import React from 'react';
import { FiCheckCircle } from "react-icons/fi";
import { IconWrapper } from '../components/IconWrapper';
import type { Task } from '../types/Task';
import { useState } from 'react';
import { RiAlarmWarningLine } from "react-icons/ri";


type TaskCardProps = {
    task: Task,
    // onToggle: () => void
}

function TaskCard(props: TaskCardProps) {

    const [finishedTask, setFinishedTask] = useState(false);

    const toggleClick = () => {
        setFinishedTask(prev => !prev)
    }
    return (
        <button className='w-full text-start'
        onClick={toggleClick}
        >
            <div
            className={`p-3 shadow-sm rounded border-l-15
                text-sm text-primary hover:shadow-md transition-shadow cursor-pointer
                ${finishedTask ? "border-secondary bg-secondary-light" : "border-orange-500 text-bold"}`}>
                    {<IconWrapper
                    icon={finishedTask ? <FiCheckCircle /> : ""}
                    children={props.task.title}
                    />}
            </div>
        </button>
    )
}

export default TaskCard