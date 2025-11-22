import { UUID } from "crypto"
import { Household } from "./Household"

export type User = {
    id: UUID,
    name: string,
    email: string,
    password: string,
    household: Household[]
}