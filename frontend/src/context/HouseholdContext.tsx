import React, { createContext, useContext, useState, useEffect } from 'react';
import { Household } from '../types/Household';
import { User } from '../types/User';
import { userEsme } from '../utils/mock_data/mock_users_households';
import { UUID } from 'crypto';

interface HouseholdContextType {
    activeHousehold: Household | null;
    switchHousehold: (houseID: UUID) => void;
    userHouseholds: Household[];
}


const HouseholdContext = createContext<HouseholdContextType | undefined>(undefined);

export const HouseholdProvider = ({ children }: { children: React.ReactNode }) => {

const userHouseholds = userEsme.household;
const [activeHousehold, setActiveHousehold] = useState<Household | null>(null);

// Setting the default active house (the first one found)
    useEffect(() => {
        if (userHouseholds.length > 0 && !activeHousehold) {
            setActiveHousehold(userHouseholds[0]);
        }
    }, [userHouseholds]);

    const switchHousehold = (houseID: UUID) => {
        const foundHouse = userHouseholds.find(h => h.id === houseID);

        if (foundHouse) {
            setActiveHousehold(foundHouse);
            console.log("Active household switched to:", foundHouse.name);
        }
    }

    return (
        <HouseholdContext.Provider value={{ activeHousehold, switchHousehold, userHouseholds }}>
            {children}
        </HouseholdContext.Provider>
    );
};

    export const useHousehold = () => {
        const context = useContext(HouseholdContext);
        if (!context) {
            throw new Error("useHousehold must be used within a HouseholdProvider");
        }
        return context;
    };