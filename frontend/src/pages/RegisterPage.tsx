import React from 'react'
import PrimaryButton from '../components/PrimaryButton';

function RegisterPage() {
    return (
        <main className='p-4 flex flex-col justify-start items-center w-full text-indigo-900'>
            <h2 className='text-center lato-regular'>New custom task</h2>
            <div className='bg-emerald-50 h-1/3 w-3/4 shadow-lg m-5'>
                <form className='flex flex-col gap-y-4 w-full p-5'>
                <label htmlFor="name_id" className="font-medium"> Name </label>
                    <input
                        className="w-full border border-emerald-400 rounded-xl bg-white p-3"
                        type="text"
                        id="name_id"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                    />
                    <label htmlFor="email_id" className="font-medium"> Email </label>
                    <input
                        className="w-full border border-emerald-400 rounded-xl bg-white p-3"
                        type="email"
                        id="email_id"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                    />
                    <label htmlFor="role_id" className="font-medium"> Role </label>
                    <select
                        id="role_id"
                        name="role"
                        // value={formData.role}
                        // onChange={handleChange}
                        className="w-full rounded-md shadow-sm py-3 border border-emerald-300 bg-white"
                    >
                        <option value="" disabled>
                            Select your role...
                        </option>
                        {/* {SESSIONS_TRACK.map(role => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))} */}
                    </select>
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

export default RegisterPage