import { UUID } from "crypto"

export type Area = {
    id: UUID,
    name: string,
    isPrivate: boolean,
    cleanliness: CleanlinessLevel,
    coments: string,
    icon?: string,
}

export enum CleanlinessLevel {
    HIGH = "Impolute",
    MED = "Chill",
    LOW = "Low"
}