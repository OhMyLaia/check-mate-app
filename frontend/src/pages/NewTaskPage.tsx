
import React from 'react'
import greenGoals from '../assets/green-goals.png';
import NewTaskForm from '../components/NewTaskForm';

function NewTaskPage() {

    return (
        <main>
            <NewTaskForm />
            <img src={greenGoals}></img>
        </main>
    )
}

export default NewTaskPage;