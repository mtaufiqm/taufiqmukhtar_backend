"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeHelper = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class DateTimeHelper {
    static timeZone = process.env.TZ;
    static getCurrentLocalTimeObj() {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).toDate();
    }
    static getCurrentLocalTime() {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).format();
    }
    static getCurrentLocalTimeWithFormat(format) {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).format(format);
    }
    static getCurrentYear() {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).get("year");
    }
    static getCurrentMonth() {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).get("month");
    }
    static getCurrentDayOfMonth() {
        return (0, moment_timezone_1.default)().tz(DateTimeHelper.timeZone).get("date");
    }
}
exports.DateTimeHelper = DateTimeHelper;
//# sourceMappingURL=datetime_helper.js.map