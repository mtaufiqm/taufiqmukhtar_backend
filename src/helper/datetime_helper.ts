import moment from "moment-timezone";


export class DateTimeHelper {
    static timeZone: string = process.env.TZ!;

    static getCurrentLocalTimeObj(): Date {
        return moment().tz(DateTimeHelper.timeZone).toDate();
    }

    static getCurrentLocalTime(): string {
        return moment().tz(DateTimeHelper.timeZone).format();
    }

    static getCurrentLocalTimeWithFormat(format: string): string {
        return moment().tz(DateTimeHelper.timeZone).format(format);
    }

    static getCurrentYear(): number {
        return moment().tz(DateTimeHelper.timeZone).get("year");
    }

    static getCurrentMonth(): number {
        return moment().tz(DateTimeHelper.timeZone).get("month");
    }

    static getCurrentDayOfMonth(): number {
        return moment().tz(DateTimeHelper.timeZone).get("date");
    }
}