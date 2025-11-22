import { UUID } from "crypto"
import { User } from "./User"
import { Area } from "./Area"

export type Household = {
    id: UUID,
    name: string,
    users: User[],
    areas: Area[],
    zipcode: number,
    info: string[],
    rules: string[],
}