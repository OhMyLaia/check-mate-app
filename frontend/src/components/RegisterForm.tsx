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
            <h2 className='text-center lato-regular text-3xl'>Sign up</h2>
            <div className='bg-secondary-light/80 h-1/3 w-3/4 shadow-lg m-5 rounded'>
                <form className='flex flex-col gap-y-4 w-full p-5'>

                    <label htmlFor="name_id" className="font-medium"> Name * </label>
                    <input
                        type="text"
                        id="name_id"
                        name="name"
                        className='w-full border border-secondary rounded-xl bg-white p-3'
                    ></input>

                    <label htmlFor="email_id" className="font-medium"> Email * </label>
                    <input
                        type="email"
                        id="email_id"
                        name="email"
                        className='w-full border border-secondary rounded-xl bg-white p-3'
                    ></input>

                    <label htmlFor="password_id" className="font-medium"> Password * </label>
                    <input
                        type="password"
                        id="password_id"
                        name="password"
                        className='w-full border border-secondary rounded-xl bg-white p-3'
                    ></input>

                        {/* join household / create household here */}

                    <div className='w-fit'>
                        <NavLink to={"/profile"}>
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

export default RegisterForm