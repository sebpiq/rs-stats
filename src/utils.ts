import { DateString } from "./types";

const dateRegExpFR = /(\d\d)\/(\d\d)\/(\d\d\d\d) à (\d\d):(\d\d):(\d\d)/

class InvalidData extends Error {}

export const parseDateString = (dateStr: DateString) => {
    const parsed = dateRegExpFR.exec(dateStr)
    if (!parsed) {
        throw new InvalidData(`invalid date string`)
    }
    const date = new Date()
    date.setFullYear(parseInt(parsed[3], 10))
    date.setMonth(parseInt(parsed[2], 10) - 1)
    date.setDate(parseInt(parsed[1], 10))

    date.setHours(parseInt(parsed[4], 10))
    date.setMinutes(parseInt(parsed[5], 10))
    date.setSeconds(parseInt(parsed[6], 10))
    return date
}