// Code your solution here

function findMatching(drivers, name) {
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, query) {
    // Filter the drivers array based on whether each driver's name starts with the query string
    return drivers.filter(driver => {
        // Convert both the driver's name and the query string to lowercase for case-insensitive matching
        const driverName = driver.toLowerCase();
        const queryString = query.toLowerCase();
        // Check if the driver's name starts with the query string
        return driverName.startsWith(queryString);
    });
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}