// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0,2);
    // 0,2 gets the first 2 names out the array
    
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2);
    // using .slice with negative 2 gets the last 2 names
}   
    
    
   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 
   // you dont need the () in the  array because they are variables that equal an array

   const createFareMultiplier = function(fareMultiplier){
    return function(fare) {
        return fare * fareMultiplier;
    }
   }

const fareDoubler = function fare(doubleFare){
    return 20
}

const fareTripler = function fare(tripleFare){
    return 36;
}
            


const selectDifferentDrivers = function(drivers, selector){
    return selector(drivers);
    // selector function with an array of drivers
    // the 2 slices values are above

    
}







