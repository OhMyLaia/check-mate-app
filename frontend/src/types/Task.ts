export type Task = {
    id: string,
    title: string,
    description?: string,
    day: Weekdays,
    assignee?: string,
    priority?: PriorityLevel,
    status?: boolean,
}

export enum PriorityLevel {
    "High",
    "Med",
    "Low"
}

export type Weekdays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";