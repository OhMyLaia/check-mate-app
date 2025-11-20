import React from 'react';
import { useState } from 'react';

function HomePage() {
        type ListTaskType = {
        id: string,
        content: string
    }

    const listTask: ListTaskType[] = [
        { id: "1", content: "Talk to client" },
        { id: "2", content: "Meeting at 5pm" },
        { id: "3", content: "Review PR" },
    ]

    const [list, setList] = useState<ListTaskType[]>(listTask);
    const [content, setContent] = useState<string>("");

    const addToList = (taskContent: string) => {
        const newId = crypto.randomUUID();
        setList(
            prev => [...prev, { id: newId, content: taskContent }]
        );
        setContent("");
    }

    const deleteFromList = (task: ListTaskType) => {
        setList (
            prev => prev.filter((t: ListTaskType) => t.id !== task.id)
        );
    }

    const handleChangeInput = (newContent: string) => {
        setContent(newContent);
    }

    return (
        <main>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col bg-gray-100
                shadow-lg p-5 m-5 w-full items-center'>
                    <label> Submit a task:
                        <input type="text"
                            onChange={e => handleChangeInput(e.target.value)}
                            value={content}
                            name="contentInput"
                            className='bg-white shadow-lg p-5 m-5 w-1/2 rounded-lg h-1/4'>
                        </input>
                    </label>
                    <button type="submit"
                    className='bg-white shadow-lg
                    p-2 m-5 rounded-lg
                    h-fit w-fit
                    hover:bg-blue-200 required'
                    onClick={() => addToList(content)}
                    >Submit</button>
                </div>
                <div className='flex flex-col bg-gray-100 shadow-lg p-5 m-5 w-full items-center'>
                    <ul className='list-disc'>
                        {list.map((element: ListTaskType) => (
                            <span key={element.id} className='flex flex-row justify-between gap-3'>
                                <li>{element.content}</li>
                                <button className='bg-white shadow-lg p-2 m-5 rounded-lg h-fit w-fit hover:bg-red-300'
                                    onClick={() => deleteFromList(element)}
                                >Delete</button>
                            </span>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default HomePage