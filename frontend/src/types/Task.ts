import { UUID } from "crypto";
import { Area } from "./Area";

export type Task = {
    id: UUID,
    title: string,
    description?: string,
    day: Weekdays,
    assignee?: string,
    priority?: PriorityLevel,
    status?: boolean,
    area?: Area,
    icon?: string,
    penalty?: string
}

export enum PriorityLevel {
    HIGH = "High",
    MEDIUM = "Medium",
    LOW = "Low"
}

export enum Weekdays {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

export enum HouseTask {
    // Kitchen
    WASH_DISHES = "wash_dishes",
    LOAD_DISHWASHER = "load_dishwasher",
    EMPTY_DISHWASHER = "empty_dishwasher",
    COOK_LUNCH = "cook_lunch",
    COOK_DINNER = "cook_dinner",
    SET_TABLE = "set_table",
    CLEAN_FRIDGE = "clean_fridge",

    // Cleaning
    SWEEP_FLOOR = "sweep_floor",
    MOP_FLOOR = "mop_floor",
    VACUUM_CLEAN = "vacuum_clean",
    DUST_FURNITURE = "dust_furniture",
    CLEAN_WINDOWS = "clean_windows",
    CLEAN_BATHROOM = "clean_bathroom",
    CLEAN_TOILET = "clean_toilet",
    TAKE_OUT_TRASH = "take_out_trash",
    TAKE_OUT_RECYCLING = "take_out_recycling",

    // Laundry / Bedroom
    DO_LAUNDRY = "do_laundry",
    HANG_CLOTHES = "hang_clothes",
    FOLD_CLOTHES = "fold_clothes",
    IRON_CLOTHES = "iron_clothes",
    CHANGE_SHEETS = "change_sheets",
    MAKE_BED = "make_bed",

    // General / Outdoor
    WATER_PLANTS = "water_plants",
    WALK_DOG = "walk_dog",
    FEED_PET = "feed_pet",
    GROCERY_SHOPPING = "grocery_shopping",

    // Others
    OTHER = "other"
}
