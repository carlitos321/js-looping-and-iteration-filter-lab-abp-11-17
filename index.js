// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })

  return matchingDrivers;
}



function fuzzyMatch(drivers, string) {

}

function matchName(drivers, string) {

}
