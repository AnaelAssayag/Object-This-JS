console.log('------------------------FUNCTION------------------------')

console.log('------------------------PARTNER EXERCISE 1----------------------')
//In your console, create a function expression called rock which simply console logs "I wanna rock!". Then, invoke it 3 times.

function rock() {
  console.log('I wanna rock!')
}
rock()
rock()
rock()

console.log('------------------------PARTNER EXERCISE 2----------------------')
//Write a function expression called convertWeight that takes one parameter, kilos, converts it to pounds, and logs the result.

var weight = 0
function convertWeight (kilos) {
  weight = kilos * 2.20462
  console.log(weight)
  
}

convertWeight(4)

console.log('------------------------PARTNER EXERCISE 3----------------------')

/*, modify the convertWeight function so that it takes two parameters: number and unit.
This function should have extra functionality! It needs to convert pounds to kilos or kilos to pounds. The first parameter number will be the actual value to convert, and the second parameter unit will be the unit of the number that was passed in: either "pounds" or "kilos". Log the result of the conversion.
Test your function with the following code:
convertWeight(100, "kilos"); // should be about 220.462
convertWeight(100, "pounds"); // should be about 45.3592*/

var weight = 0
function convertWeight (number, unit) {
  if(unit === 'kilos') {
    weight = number * 2.20462
  }
  if(unit === 'pounds') {
    weight = number / 2.20462
  }
  console.log(weight)
}

convertWeight(100, 'pounds')

console.log('------------------------INDIVIDUAL EXERCISE 1----------------------')
//Write a function called calcAge in such a way that when the code below executes, age is 28.


function calcAge (currentYear, birthYear) {
  return currentYear - birthYear
}

var age = calcAge(2017, 1989)
console.log(age)

console.log('------------------------INDIVIDUAL EXERCISE 2----------------------')
/*Change the function above so that it:
calculates the 2 possible ages based on the years provided. For example a person born in 2013 may be either 3 or 4 years old at the moment!
outputs the result to the screen like so: "You are either NN or NN"
bonus: instead of passing in the current year as an argument, find a way to get it automatically with JavaScript.*/

var possAge = 0
var possAge2 = 0

function calcAge (currentYear, birthYear) {
    possAge = currentYear - birthYear
    possAge2 = possAge - 1
    
    console.log('your either ' + possAge + ' or ' + possAge2)
} 

var age = calcAge(2017, 1989)

console.log('------------------------INDIVIDUAL EXERCISE 3----------------------')
/*Write a JavaScript function called isPrime that accepts a number as a parameter and checks if the number is prime or not. 
Return true if it is prime or false if it is not prime. Don't Google this one ;)
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors 
other than 1 and itself (for example, 3 is prime as the number 2 does not divide into it , 4 is not prime as 2 does divide into it, 
similarly 9 is not prime as 3 divides into it). To make sure you understand, is 13 prime?*/


function isPrime (number) {
  if(number === 1) {
    return false;
  }
  else if(number === 2) {
    return true;
  }else{
    for (var i = 2; i<number; i++) {
      if(number % i === 0)
      return false;
    }
  }
  return true;
}

isPrime(9)

console.log('------------------------INDIVIDUAL EXERCISE 5----------------------')

//Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. The function should return true or false depending on whether the number exists in the array.

function checkNumber(array, number) {
  if(array.includes(number)) {
    return true
  }else {
    return false
  }
}
checkNumber([1,2,3], 6)

console.log('------------------------INDIVIDUAL EXERCISE 6----------------------')

/*Write a C++ function (just kidding, use JavaScript) that accepts two parameters: one being an array of integers, 
and the other being a number. The function should print all the numbers from the array that are smaller than the number that was passed in.*/

var smallestNum = []
function findsmaller(array, number) {
  for(var i = 0; i<array.length; i++) {
    if(array[i] < number) {
      smallestNum.push(array[i])
      }
    }console.log(smallestNum)
}

findsmaller([2,3,4,8,8], 3)


console.log('------------------------OBJECT------------------------')

console.log('------------------------PARTNER EXERCISE 8----------------------')

//With your partner, add a method to the object you created in previous exercise. 
//Slack it to an instructor so that they can check it out.*/

var createObj = {
  weekDays:{
    day1: 'Sunday',
    day2: 'Monday',
    day3: 'Tuesday',
    day4: 'Wednesday',
    day5: 'Thursday',
    day6: 'Friday',
    day7: 'Saturday'
  },
  weekEnd: function defWeekEnd(day) {
    if (day == this.weekDays.day6 || day == this.weekDays.day7) {
      console.log('Yayyy')
   }else{
      console.log('Go back to work')
   }
  }
}

createObj.weekEnd('Monday')




/*Here we have a reservation system where people can claim their reservations when they arrive. Finish the claimReservation function. It should:

If the reservation exists and is unclaimed, welcome the user (use alert).
If the reservation exists and is already claimed, inform the user about the situation (use alert).
If there is no reservation, tell the user there is nothing under their name (user alert).
Use 'Bob' and 'Ted' to test your code.*/

/*It so happens that our restaurant has a bunch of open tables. Therefore, if someone doesn't have a reservation, add it to the reservations object and set "claimed" to true for that person. Alert them of their new reservation.*/



var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

console.log(reservations.Bob.claimed)

var name = prompt('Please enter the name for your reservation');

var claimReservation = function (name) {
  // write your code here!
  if (reservations[name] && ! reservations[name].claimed) {
    alert('Welcome ' + name)
  }
  else if (reservations[name] && reservations[name].claimed) {
    alert('your reservation has already been claimed')
  }
  else{
    reservations[name] = {claimed: true}
    alert('Your reservation has been considered')
  }

}

claimReservation(name);
console.log(reservations)





console.log('------------------------THIS------------------------')

console.log('------------------------PARTNER EXERCISE 1----------------------')


console.log('------------------------PARTNER EXERCISE 1----------------------')
//Copy/paste the following code in your console. Fix the errors to make it work:



var person = {
  hungry: true,
  
  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      alert('Im no longer hungry!');
    }
  }
}

person.feed();

console.log('------------------------PARTNER EXERCISE 2----------------------')
//Copy/paste the following code in your console. Fix the errors to make it work. There is 1 logic error and 2 syntax errors:


var pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

var garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

console.log('------------------------PARTNER EXERCISE 3----------------------')
//Copy/paste the following code in your console. Fix 2 logic errors:

var pumpFuel = function (plane) {
  plane.fuel += 1;
};

var airplane = {
  fuel:0,
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Can it fly now? ' + airplane.fly());

console.log('------------------------PARTNER EXERCISE 4----------------------')

/*Create a method called stealCoins that takes a number parameter and decreases the tipJar's coins by that amount:*/

var tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (number) {
    this.coinCount -= number
  }
};


tipJar.tip();
console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);


console.log('------------------------PARTNER EXERCISE 5----------------------')

//The code below has a few problems. Fix the 3 syntax errors and 1 logical error. The flow of this is really tricky, so take it slow and write it out if you need to:

var revealSecret = function () {
  return this.secret;
};

var shoutIt = function (person, func) {
  person.revealSecret = func;
  var result = person.revealSecret();
  alert(person.name + " said: " + result);
};

var avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

var narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

console.log('------------------------INDIVIDUAL EXERCISE----------------------')

var coffeeShop = {
  beans: 40,
  money: 100,
  beansCost: 5,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  
  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if(! this.drinkRequirements[drinkType]) {
      alert('Sorry, we don\'t make ' + drinkType)
    }
    else if (this.beans >= this.drinkRequirements[drinkType]){
      this.beans = this.beans - this.drinkRequirements[drinkType]
    }
    else {
      alert('Sorry, we\'re all out of beans')
    }
  },
  
  buySupplies: function(beanPurchased) {
    if((this.beansCost * beanPurchased) > this.money) {
      alert('Not enough money')
    }else{
    this.money -= (beanPurchased * this.beansCost)
    this.beans += beanPurchased
    }

  }
}


coffeeShop.buySupplies(15)
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

