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

//COMMENTARY: Not gonna lie the wording for this one tripped me up a bit, PURELY because I read your hint AFTER I started brainstorming and it derailed me XD.
// Now, I settled on this set up, because once again every nested idea I had just didn't fit, it did occur to me that I might be able to use a switch method,
//but I wasn't confident enough in the possible results to swap out what was already working. I'll play with that on my own time.
//So, we have one for loop running the FujiTons array to completion, and since we are using the same weight for every day, for all three, I was then able
//to use splice to complete the other two easy as that.

 let fujiTons = []
 let galaTons = []
 let pinkTons = []

    for(let i = 0; i < 7; i++){
        fujiTons.push(6.5)
    }
console.log(fujiTons)

galaTons = fujiTons.slice(0, 7)
pinkTons = fujiTons.slice(0, 7)

console.log(galaTons)
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

//COMMENTARY: Most of my math classes are FAR FAR behind me, so I had to double check my formula before doing this one.
//Again because we used all of the same info for each type i just had it run the math, in the proper order of operation, for each.

 let fujiPounds = 0
 let galaPounds = 0
 let pinkPounds = 0

 fujiPounds = (6.5 * 7) * 2000

 console.log(fujiPounds)

 galaPounds = (6.5 * 7) * 2000

 console.log(galaPounds)

 pinkPounds = (6.5 * 7) * 2000

 console.log(pinkPounds)




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

//COMMENTARY: this one is getting a comment because I had to remind myself the ENTIRE time that we're dealing with TENS of THOUSANDS of pounds here,
//so when I first ran the math I was positive i messed it up, looked up the formula, turned out I had it right, and went on with programming the
//math for the other 2.

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
//COMMENTARY: I will do another one of these somewhere cause this is just flavor text, but this one was very cut and dry. Add all the things, load into variable, PARTY!

let  totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)