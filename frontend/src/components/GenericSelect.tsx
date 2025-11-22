import React from 'react'
import { HouseTask } from '../types/Task'
import { useTranslation } from 'react-i18next';

interface GenericSelectProps<T extends string> {
    label: string,
    value: T | "",
    options: T[],
    onChange: (newValue: T) => void,
    translationPrefix?: string,
    placeholder?: string
}

function GenericSelect<T extends string>({ 
    label, 
    value = "", 
    options, 
    onChange, 
    translationPrefix,
    placeholder = "-- Select --"
}: GenericSelectProps<T>) {

    const { t } = useTranslation();


    return (
        <select
            id={`${label}_id`}
            name={`${label}`}
            value={value}
            onChange={() => onChange}
            className="w-full rounded-md shadow-sm py-3
            border border-emerald-300 bg-white">
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map(opt => (
                <option key={opt} value={opt}>
                    {translationPrefix 
                            ? t(`${translationPrefix}.${opt}`)
                            : opt
                        }
                </option>
            ))}
        </select>
    )
}

export default GenericSelect