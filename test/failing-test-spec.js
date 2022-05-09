'use strict'

const chai = require('chai')
const expect = chai.expect
const hotel = require('../src/main')
const getCheapestHotel = hotel.getCheapestHotel 

//main
(function () {
  const it = require('./test').it
  const toBe = require('./test').toBe

  const hotelConfig = require('../hotel').hotel
  const createHotel = require('../hotelController').createHotel
  const betterHotel = require('../mainController').chooseBetterOption

})()

//dailyController
(function () {
  const it = require('./test').it
  const toBe = require('./test').toBe

  const discoverMonth = require('../dailyController').discoverMonth
  const createDailyDt = require('../dailyController').createDailyData

})()

//hotelController
(function () {
  const it = require('./test').it
  const toBe = require('./test').toBe

  const Hotel = require('../Hotel')
  const Rate = require('../Rate')

  const createHotel = require('../hotelController').createHotel
  const hotelConfig = require('../hotel').hotel

})()

//userController
(function () {
  const it = require('./test').it
  const toBe = require('./test').toBe
  
  const checkCategory = require('../userController').checkCategory
  const createUser = require('../userController').createUser
  const User = require('../User').User
  const CATEGORIES = require('../userCategories')


})()