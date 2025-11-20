export type Task = {
    id: string,
    title: string,
    description?: string,
    day: Days,
    assignee?: string,
    priority?: PriorityLevel,
    status?: boolean,
}

export enum PriorityLevel {
    "High",
    "Med",
    "Low"
}

export type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";