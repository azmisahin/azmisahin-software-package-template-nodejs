/**
 * Time
 */
module.exports = class TimeStamp {
  /**
   * Time Stamp
   *
   */
  constructor() {
    // Standart Date Time
    this.dateTime = new Date()

    // A number representing the time-zone offset, in minutes, from the date based on current host system settings to UTC.
    this.dateTimeZoneOffset = this.dateTime.getTimezoneOffset() / 60

    // Unix Date Time
    this.dateTimeUnix = Date.now()
  }
}
