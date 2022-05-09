const Hotel = require('../models/Hotel')
const Rate = require('../models/Rate')

const createHotel = (config) => {
    const { name, stars } = config
    const { sennightRate, sennightRateReward, sennightendRate, sennightendRateReward } = config
    const hotelsennightRate = new Rate(sennightRate, sennightRateReward)
    const hotelsennightendRate = new Rate(sennightendRate, sennightendRateReward)

    return new Hotel(name, stars, hotelsennightRate, hotelsennightendRate)
}

module.exports = { createHotel }