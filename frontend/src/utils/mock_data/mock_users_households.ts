import { User } from "../../types/User";
import { Household } from "../../types/Household";

export const userNamesList: string[] = [];

export const userEsme: User = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Esme",
    email: "alice@checkmate.com",
    password: "hashed_password_1",
    household: [] // We will push to this later
};

export const userBob: User = {
    id: "123e4567-e89b-12d3-a456-426614174001",
    name: "Bob",
    email: "bob@checkmate.com",
    password: "hashed_password_2",
    household: []
};

export const userDafne: User = {
    id: "123e4567-e89b-12d3-a456-426614174002",
    name: "Dafne",
    email: "charlie@checkmate.com",
    password: "hashed_password_3",
    household: []
};

export const mainApartment: Household = {
    id: "123e4567-e89b-12d3-a456-426614174004",
    name: "Baker Street Apt",
    users: [userEsme, userBob], // Alice and Bob live here
    areas: [],
    zipcode: 10001,
    info: ["Wifi: SuperFast", "Trash pickup: Tuesdays"],
    rules: ["No shoes inside", "Quiet hours after 10 PM"]
};

export const beachHouse: Household = {
    id: "123e4567-e89b-12d3-a456-426614174003",
    name: "Sunny Beach House",
    users: [userDafne, userEsme],
    areas: [],
    zipcode: 90210,
    info: ["Key under the mat", "Water plants daily"],
    rules: ["No parties", "Clean sand off feet"]
};

userEsme.household.push(mainApartment, beachHouse);
userBob.household.push(mainApartment);
userDafne.household.push(beachHouse);
userNamesList.push(userBob.name, userDafne.name, userEsme.name)
console.log(userNamesList);