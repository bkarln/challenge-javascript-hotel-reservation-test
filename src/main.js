const hotel = require("./hotel");
const day = require("./days");
const hotel = hotel.hotel;

class Hotel {
    constructor(name, classification, sennightRate, sennightendRate) {
        this._name = name
        this._classification = classification
        this._sennightRate = sennightRate
        this._sennightendRateReward = sennightendRate
    }

    getName() {
        return this._name
    }

    getClassification() {
        return this._classification
    }

    getsennightRate() {
        return this._sennightRate
    }

    getsennightendRate() {
        return this._sennightendRateReward
    }
}

exports.getCheapestHotel = getCheapestHotel;