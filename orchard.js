///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

// COMMENTARY: So as an opener, I am one of those people, that absolutely CAN do a lot of stuff in their head, which is why there is a distinct LACK of
//pseudo code in my work. I will fix that, so hopefully the commentary will help walk you through my head space here. Also I try to inject some of my
//brand of humor into what I type/write. If you get a chuckle out of some of it it was worth it in my eyes. You have been warned...it's all clean don't sweat it.

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/




// CODE HERE

//COMMENTARY: I ran through several possibilities, like nesting this all together which WOULD look neater and = less code, 
//but this way I am print out more real time information incase something does go KABOOM. Mercifully it did not. Besides the more I type this out the 
//better my syntax recall will be.


//Review: alternate answer; totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i] or to have it run in seperate lines.

let totalAcres = 0

for(let i = 0; i < fujiAcres.length; i++){
    totalAcres = totalAcres + fujiAcres[i]
}

console.log(totalAcres)

for(let i = 0; i < galaAcres.length; i++){
    totalAcres = totalAcres + galaAcres[i]
}

console.log(totalAcres)

for(let i = 0; i < pinkAcres.length; i++){
    totalAcres = totalAcres + pinkAcres[i]
}

console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//COMMENTARY: I am sure that there was a more coding heavy way to do this, but I've had K.I.S.S hammered into me for 20 years, so I went with the simple and direct method
//of giving it what i know and running it that way. Also I doubt we're going to suddenly have an 8 day week anytime soon, so as long as the process is tied
//to the variable for total acres this will still be able to adapt to changes in how many acre were worked with.

let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

//COMMENTARY: This one gave me some sass, as you can tell by the added if statement to make sure our farm hands weren't harvesting the neighbors trees. 
//Thoughtful and generally kind person I may be, but that doesn't mean i'm gonna do your work for free. 
//So I ran a while loop that ran this code until it triggered the if statement, and viola our workers had a nice easy time on the final day they only had to do 3 acres.

while (acresLeft > 0) {
    if(averageDailyAcres > acresLeft){
        acresLeft = 0
        days += 1
    } else {
        days += 1
        acresLeft = acresLeft - averageDailyAcres
    }
    
    console.log(acresLeft)
}
console.log('This took ' + days + ' Days.')

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//COMMENTARY: I got this one WAYYYYY wrong...sad. Once again always re-read.

//Actual Solution: for(let i = 0; i < fujiAcres.length; i++ ){ let tonConvert = fujiAcres[i] * 6.5  fujiTons.push(tonConvert)} do this for each entry.

 let fujiTons = []
 let galaTons = []
 let pinkTons = []
//My original answer:
//     for(let i = 0; i < 7; i++){
//         fujiTons.push(6.5)
//     }
// console.log(fujiTons)

// galaTons = fujiTons.slice(0, 7)
// pinkTons = fujiTons.slice(0, 7)

// console.log(galaTons)
// console.log(pinkTons)

//ACTUAL answer typed out for the Experience and because i HATE leaving something broken once I know how to fix it:

let tonConvert = 0

for(let i = 0; i < fujiAcres.length; i++){
    tonConvert = fujiAcres[i] * 6.5
    fujiTons.push(tonConvert)
}
console.log(fujiTons)

for(let i = 0; i < galaAcres.length; i++){
    tonConvert = galaAcres[i] * 6.5
    galaTons.push(tonConvert)
}
console.log(galaTons)

for(let i = 0; i < pinkAcres.length; i++){
    tonConvert = pinkAcres[i] * 6.5
    pinkTons.push(tonConvert)
}
console.log(pinkTons)
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//COMMENTARY: whelp since the last one was FUBAR this is also FUBAR.

//actual solution: I missed it in the review so I wrote this one out myself. XD

 let fujiPounds = 0
 let galaPounds = 0
 let pinkPounds = 0

 let totalFuji = 0
 let totalGala = 0
 let totalPink = 0

 for(i = 0; i < fujiTons.length; i++){
   totalFuji = fujiTons[i] + totalFuji
 }
 console.log(totalFuji)

 for(i = 0; i < galaTons.length; i++){
   totalGala = galaTons[i] + totalGala
 }
 console.log(totalGala)

 for(i = 0; i < pinkTons.length; i++){
   totalPink = pinkTons[i] + totalPink
 }
 console.log(totalPink)

 fujiPounds = totalFuji * 2000
 galaPounds = totalGala * 2000
 pinkPounds = totalPink * 2000

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

//  fujiPounds = (6.5 * 7) * 2000

//  console.log(fujiPounds)

//  galaPounds = (6.5 * 7) * 2000

//  console.log(galaPounds)

//  pinkPounds = (6.5 * 7) * 2000

//  console.log(pinkPounds)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//COMMENTARY: OKAY, now that I fixed the other two this answer is now correct. 

 let fujiProfit = 0
 let galaProfit = 0
 let pinkProfit = 0


fujiProfit = fujiPounds * fujiPrice
console.log(fujiProfit)

galaProfit = galaPounds * galaPrice
console.log(galaProfit)

pinkProfit = pinkPounds * pinkPrice
console.log(pinkProfit)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//COMMENTARY: See the above comment, a pox on all early AM brain fog! always read and reread, and reread AGAIN!

let  totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)