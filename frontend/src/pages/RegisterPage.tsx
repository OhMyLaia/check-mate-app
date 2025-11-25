import React from 'react'
import PrimaryButton from '../components/PrimaryButton';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
    return (
        <main className='p-4 flex flex-col justify-start items-center w-full text-indigo-900'>
            <RegisterForm/>
        </main>
    )
}

export default RegisterPage