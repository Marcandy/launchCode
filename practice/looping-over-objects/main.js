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


/**** LOOP MUSCLE-MEMORY DRILL: for...of / for...in / classic for ****/

/*
    Six timed exercises. Two per loop type. Pick the right tool for the job,
    write the solution from scratch, run the file, compare to the expected output.
    Do NOT look up syntax until you have made an honest attempt.
*/

/** EXERCISE 3: CART TOTAL  ( for...of ) **/

const prices = [9.99, 14.50, 3.25, 22.00, 7.80];

/*
    TODO: Use a 'for...of' loop to iterate over the 'prices' array and
    accumulate the total. Log the final result using a template literal:
    "Total: $[total]"

    Expected output:
    Total: $57.54

    for...in can work on arrays,
     but you should almost never use it that way. 
*/
let total = 0;
for(let price of prices) {
    console.log(price, prices); // price is the index now the value
    total += price;
}
console.log(`Total: ${total}`);

/** EXERCISE 4: IN-STOCK PRODUCTS  ( for...of ) **/

const products = [
    { name: "Pen",      stock: 5  },
    { name: "Notebook", stock: 0  },
    { name: "Eraser",   stock: 12 },
    { name: "Marker",   stock: 0  },
    { name: "Ruler",    stock: 3  },
];


/*
    TODO: Use a 'for...of' loop to iterate over the 'products' array.
    Log ONLY the names of products whose 'stock' is greater than 0.

    Expected output:
    Pen
    Eraser
    Ruler
*/

for( let prod of products ) {
    if(prod.stock > 0) {
        console.log(prod.name);
    }
}

/** EXERCISE 5: PASS / FAIL REPORT  ( for...in ) **/

const scores = {
    math:    88,
    english: 72,
    science: 95,
    history: 64,
    art:     70,
};

/*
    TODO: Use a 'for...in' loop to iterate over the 'scores' object.
    For each subject, log "[subject]: passed" if the score is >= 70,
    otherwise log "[subject]: failed".

    Expected output:
    math: passed
    english: passed
    science: passed
    history: failed
    art: passed
*/


/** EXERCISE 6: CART ITEM COUNT  ( for...in ) **/

const cart = {
    apple:  3,
    bread:  1,
    milk:   2,
    cheese: 1,
    eggs:   12,
};

/*
    TODO: Use a 'for...in' loop to iterate over the 'cart' object.
    Sum up all the quantities and log the total using a template literal:
    "Total items: [total]"

    Expected output:
    Total items: 19
*/


/** EXERCISE 7: DAILY TEMPERATURE REPORT  ( classic for ) **/

const temps = [72, 68, 75, 80, 65, 70, 78];

/*
    TODO: Use a classic 'for' loop (with an index variable 'i') to iterate
    over the 'temps' array. Log each day's temperature labeled by day number,
    starting at Day 1 (not Day 0).

    Expected output:
    Day 1: 72°F
    Day 2: 68°F
    Day 3: 75°F
    Day 4: 80°F
    Day 5: 65°F
    Day 6: 70°F
    Day 7: 78°F
*/


/** EXERCISE 8: MULTIPLICATION TABLE  ( classic for ) **/

/*
    TODO: No starting data. Use a classic 'for' loop to print the 7 times
    table from 7 x 1 up to 7 x 10. Format each line as:
    "7 x [n] = [result]"

    Expected output:
    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    ... (continues to 10)
    7 x 10 = 70
*/

