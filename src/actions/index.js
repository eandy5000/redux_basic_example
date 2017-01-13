export const CHOOSE_DAY = "choose day"

export function chooseDay(day) {
    return {
        type: CHOOSE_DAY,
        payload: day
    }
}