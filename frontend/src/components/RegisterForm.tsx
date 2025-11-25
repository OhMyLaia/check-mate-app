import React, { useState } from 'react';
import GenericSelect from './GenericSelect';
import PrimaryButton from './PrimaryButton';
import { NavLink } from 'react-router-dom';

function RegisterForm() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className='p-4 flex flex-col justify-start items-center w-full text-primary'>
            <h2 className='text-center lato-regular text-3xl'>New custom name</h2>
            <div className='bg-secondary-light/80 h-1/3 w-3/4 shadow-lg m-5 rounded'>
                <form className='flex flex-col gap-y-4 w-full p-5'>

                    <label htmlFor="name_id" className="font-medium"> Select a name </label>
                    <input
                    type="text"
                    id="name_id"
                    name="name"
                    className='w-full border border-secondary rounded-xl bg-white p-3'
                    ></input>

                    <NavLink to={"/home"}>
                        <PrimaryButton
                            // isLoading={isLoading}
                            type={"submit"}
                            children={"Submit"}
                            className={`${"bg-primary border-2 border-primary text-white hover:bg-secondary hover:border-2 hover:border-primary hover:text-primary"}`}
                        />
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm