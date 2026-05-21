/**** LOOPING OVER KEY/VALUE PAIRS: PRACTICE ****/

/*
    Practice mapping over object dictionary sets using structural loop 
    extractors to generate data reports.
*/

/** EXERCISE 1: THE COMMS STATION CHECK **/

const stationPingsMs = {
	tychoStation: 42,
	ceresStation: 185,
	baseCidonia: 310,
};

for ( let station in stationPingsMs) {
    console.log(`Connection to ${station} latency is: ${stationPingsMs[station]}ms.`);
}

/*
    TODO: Use a 'for...in' loop to iterate through the 'stationPingsMs' object.
    Log a network diagnostic statement for each entry using a template literal:
    "Connection to [stationKey] latency is: [ping value]ms."
*/

/** EXERCISE 2: WEAPONS INVENTORY VERIFICATION **/

const pdcAmmoLocker = {
	bayOneRails: 400,
	bayTwoRails: 150,
	bridgeDefenses: 0,
};
 
let lockersArr = Object.keys(pdcAmmoLocker);


for ( let lock of lockersArr) {
    if(pdcAmmoLocker[lock] === 0) {
        console.log(`CRITICAL DEPLETION: ${lock} ammo is completely empty!`);
    }
}
/*
    TODO: Use 'Object.keys()' to extract an array of all keys from 'pdcAmmoLocker'.
    Iterate over that keys array using a 'for...of' loop.
    Inside the loop, check if the value of that key equals 0. If it does, 
    log an emergency update using a template literal: "CRITICAL DEPLETION: [key] ammo 
    is completely empty!"
*/