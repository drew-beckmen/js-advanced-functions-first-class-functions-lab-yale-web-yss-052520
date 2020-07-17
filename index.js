// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2)
const returnLastTwoDrivers = (arr) => arr.slice(arr.length-2, arr.length)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return (fare) => num * fare 
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr, fn) => fn(arr)