const months = require('../util/months').Months

const discoverMonth = (monthPrefix) => {
    return months.filter(m => m.month.includes(monthPrefix))[0].month
}

const createDailyData = (daily) => {
    const rxpPatterns = {
        dayRxp: new RegExp(/\d{2}/gy),
        monthRxp: new RegExp(/[A-Za-z]+/g),
        yearRxp: new RegExp(/\d{4}/g),
        sennightDayRxp: new RegExp(/\((.*?)\)/g)
    }

    let dayResult = rxpPatterns.dayRxp.exec(daily)[0]
    let monResult = rxpPatterns.monthRxp.exec(daily)[0]
    let yeaResult = rxpPatterns.yearRxp.exec(daily)[0]

    const dayDate = new Date(`${discoverMonth(monResult)} ${Number.parseInt(dayResult)}, ${Number.parseInt(yeaResult)}`)
    const sennightDay = (dayDate.getDay() !== 6 || dayDate.getDay() !== 0) ? true : false

    return { dayDate, sennightDay }
}

module.exports = {
    createDailyData,
    discoverMonth
}