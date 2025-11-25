import { UUID } from "crypto"

export type Penalty = {
    id: UUID,
    content: string,
    source: 'system' | 'custom';
    category?: 'friends' | 'family' | 'couple';
}

export enum TaskPenalty {
    BUY_BEER = 'buy_beer',
    BUY_CHIPS = 'buy_chips',
    BUY_COFFEE = 'buy_coffee',
    MAKE_BED = 'make_bed',
    DO_DISHES = 'do_dishes',
    COOK_DINNER = 'cook_dinner',
    TEN_MINUTE_MASSAGE = 'ten_minute_massage',
    WALK_DOG = 'walk_dog',
    CHOOSE_MOVIE = 'choose_movie',
    CLEAN_TOILET = 'clean_toilet',
    FOLD_LAUNDRY = 'fold_laundry',
    BUY_ICE_CREAM = 'buy_ice_cream',
    EMPTY_DISHWASHER = 'empty_dishwasher',
    TAKE_OUT_TRASH = 'take_out_trash',
    BREAKFAST_IN_BED = 'breakfast_in_bed',
    NO_PHONE_HOUR = 'no_phone_hour',
}

export const PenaltyDescriptions: Record<TaskPenalty, string> = {
    [TaskPenalty.BUY_BEER]: 'Buy a beer for the house',
    [TaskPenalty.BUY_CHIPS]: 'Buy a bag of chips',
    [TaskPenalty.BUY_COFFEE]: 'Treat to a coffee',
    [TaskPenalty.MAKE_BED]: 'Make the bed for a week',
    [TaskPenalty.DO_DISHES]: 'Do the dishes tonight',
    [TaskPenalty.COOK_DINNER]: 'Cook dinner for everyone',
    [TaskPenalty.TEN_MINUTE_MASSAGE]: 'Give a 10-minute shoulder massage',
    [TaskPenalty.WALK_DOG]: 'Take the dog for an extra walk',
    [TaskPenalty.CHOOSE_MOVIE]: 'Winner chooses the movie tonight',
    [TaskPenalty.CLEAN_TOILET]: 'Clean the bathroom toilet',
    [TaskPenalty.FOLD_LAUNDRY]: 'Fold one load of laundry',
    [TaskPenalty.BUY_ICE_CREAM]: 'Buy a pint of ice cream',
    [TaskPenalty.EMPTY_DISHWASHER]: 'Empty the dishwasher',
    [TaskPenalty.TAKE_OUT_TRASH]: 'Take out the trash',
    [TaskPenalty.BREAKFAST_IN_BED]: 'Serve breakfast in bed on Sunday',
    [TaskPenalty.NO_PHONE_HOUR]: 'Put phone away for one hour',
};

export enum TaskPenaltyFamily {
    NO_PHONE_HOUR = 'no_phone_hour',
    ORGANIZE_DRAWERS = 'organize_drawers',
    SHOULDER_MASSAGE = 'shoulder_massage',
    SING_SONG = 'sing_song',
    SORRY_DRAWING = 'sorry_drawing',
    CHORE_POEM = 'chore_poem',
    LISTEN_TO_TOPIC = 'listen_to_topic',
    COOK_YUMMY = 'cook_yummy',
    CLEAN_GARBAGE_CANS = 'clean_garbage_cans',
    CLEAN_FRIDGE = 'clean_fridge',
    CLEAN_FREEZER = 'clean_freezer',
    CREATE_GROCERY_LIST = 'create_grocery_list',
    CLEAN_MIRRORS = 'clean_mirrors',
    WATER_PLANTS = 'water_plants',
    // Additional suggestions
    DANCE_PERFORMANCE = 'dance_performance',
    TELL_THREE_JOKES = 'tell_three_jokes',
    WEAR_SILLY_HAT = 'wear_silly_hat',
    UNLOAD_DISHWASHER = 'unload_dishwasher',
}

export const PenaltyDescriptionsFamily: Record<TaskPenaltyFamily, string> = {
    [TaskPenaltyFamily.NO_PHONE_HOUR]: 'No phone hour (everyone interacts)',
    [TaskPenaltyFamily.ORGANIZE_DRAWERS]: 'Organise the kitchen junk drawers',
    [TaskPenaltyFamily.SHOULDER_MASSAGE]: 'Give a 10-minute shoulder massage',
    [TaskPenaltyFamily.SING_SONG]: 'Sing a song in front of the whole family',
    [TaskPenaltyFamily.SORRY_DRAWING]: 'Create a "sorry" drawing',
    [TaskPenaltyFamily.CHORE_POEM]: 'Create a poem about chores',
    [TaskPenaltyFamily.LISTEN_TO_TOPIC]: 'Listen to someone talk about a topic of their choosing',
    [TaskPenaltyFamily.COOK_YUMMY]: 'Cook something yummy for the family',
    [TaskPenaltyFamily.CLEAN_GARBAGE_CANS]: 'Scrub and clean the garbage cans',
    [TaskPenaltyFamily.CLEAN_FRIDGE]: 'Organise and clean the fridge',
    [TaskPenaltyFamily.CLEAN_FREEZER]: 'Organise and clean the freezer',
    [TaskPenaltyFamily.CREATE_GROCERY_LIST]: 'Inventory pantry and create grocery list',
    [TaskPenaltyFamily.CLEAN_MIRRORS]: 'Wipe down all mirrors in the house',
    [TaskPenaltyFamily.WATER_PLANTS]: 'Water all the indoor plants',
    [TaskPenaltyFamily.DANCE_PERFORMANCE]: 'Perform a 1-minute interpretive dance',
    [TaskPenaltyFamily.TELL_THREE_JOKES]: 'Tell three jokes at dinner',
    [TaskPenaltyFamily.WEAR_SILLY_HAT]: 'Wear a silly hat during the next meal',
    [TaskPenaltyFamily.UNLOAD_DISHWASHER]: 'Unload the dishwasher immediately',
};

export enum TaskPenaltyCouple {
    PART_BODY_MASSAGE = 'part_body_massage',
    FULL_BODY_MASSAGE = 'full_body_massage',
    PARTNER_CHOOSES_MOVIE = 'partner_chooses_movie',
    PARTNER_CHOOSES_SERIES = 'partner_chooses_series',
    COOK_ROMANTIC_DINNER = 'cook_romantic_dinner',
    BUY_FAV_MUNCHIES = 'buy_fav_munchies',
    THIRTY_MIN_CUDDLES = 'thirty_min_cuddles',
    NO_COMPLAINTS_DAY = 'no_complaints_day',
    DO_PARTNER_CHORE = 'do_partner_chore',
    PREPARE_BREAKFAST = 'prepare_breakfast',
    VISIT_FAV_STORE = 'visit_fav_store',
    FIVE_KISSES = 'five_kisses',
    TEN_KISSES = 'ten_kisses',
    // Additional suggestions
    WRITE_LOVE_NOTE = 'write_love_note',
    CONTROL_MUSIC = 'control_music',
    HEAD_SCRATCHES = 'head_scratches',
    COMPLIMENT_SPREE = 'compliment_spree',
}

export const PenaltyDescriptionsCouple: Record<TaskPenaltyCouple, string> = {
    [TaskPenaltyCouple.PART_BODY_MASSAGE]: 'Give a part-body massage (feet/hands/neck)',
    [TaskPenaltyCouple.FULL_BODY_MASSAGE]: 'Give a full body massage',
    [TaskPenaltyCouple.PARTNER_CHOOSES_MOVIE]: 'Partner chooses the movie tonight',
    [TaskPenaltyCouple.PARTNER_CHOOSES_SERIES]: 'Partner chooses the next TV series to watch',
    [TaskPenaltyCouple.COOK_ROMANTIC_DINNER]: 'Cook a romantic dinner',
    [TaskPenaltyCouple.BUY_FAV_MUNCHIES]: 'Buy partner\'s favorite munchies',
    [TaskPenaltyCouple.THIRTY_MIN_CUDDLES]: '30 minutes of dedicated cuddling',
    [TaskPenaltyCouple.NO_COMPLAINTS_DAY]: 'Go 24 hours without complaining',
    [TaskPenaltyCouple.DO_PARTNER_CHORE]: 'Do one of your partner\'s chores',
    [TaskPenaltyCouple.PREPARE_BREAKFAST]: 'Prepare breakfast for partner',
    [TaskPenaltyCouple.VISIT_FAV_STORE]: 'Go to partner\'s favorite store with them',
    [TaskPenaltyCouple.FIVE_KISSES]: 'Give 5 kisses immediately',
    [TaskPenaltyCouple.TEN_KISSES]: 'Give 10 kisses immediately',
    [TaskPenaltyCouple.WRITE_LOVE_NOTE]: 'Write a cheesy love note or poem',
    [TaskPenaltyCouple.CONTROL_MUSIC]: 'Partner controls the music/radio for the day',
    [TaskPenaltyCouple.HEAD_SCRATCHES]: 'Give 10 minutes of head scratches',
    [TaskPenaltyCouple.COMPLIMENT_SPREE]: 'Give 5 genuine compliments today',
};