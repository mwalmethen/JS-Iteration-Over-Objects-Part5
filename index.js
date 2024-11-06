const fruits = [
    {
      "id": 501,
      "name": "Apple",
      "color": "Red",
      "taste": "Sweet"
    },
    {
      "id": 502,
      "name": "Banana",
      "color": "Yellow",
      "taste": "Sweet"
    },
    {
      "id": 503,
      "name": "Orange",
      "color": "Orange",
      "taste": "Citrusy"
    },
    {
      "id": 504,
      "name": "Grapes",
      "color": "Purple",
      "taste": "Sweet"
    },
    {
      "id": 505,
      "name": "Kiwi",
      "color": "Green",
      "taste": "Tangy"
    }
  ];

  /**********
Question 1:
You have a function getFruitColor(fruit) that:
- receives a fruit object
- returns the color of the fruit
Don't forget to uncomment the console.log
===
ANSWER: Red
**********/

function getFruitColor(fruit) {
    return fruit.color;  // .color to find color in the object

}
console.log(getFruitColor(fruits[0])); // calling function



/**********
Question 2:
You have a function that:
- receives a fruit object
- receives a taste description (string)
- returns true if the fruit's taste matches the provided description, otherwise returns false
===
ANSWER: true
**********/

function isFruitTasteMatching(fruit, taste) {
    if (fruit.taste === taste) { // using if statment to check if we have type of taste
        return true;
    } else {
        return false;
    }
  }
console.log(isFruitTasteMatching(fruits[2], "Citrusy")); // calling function 


/**********
Question 3:
addFruit(fruits, fruit):
- receives an array of fruit objects
- receives a new fruit object (with id, name, color, and taste)
- adds the new fruit to the array
- returns the updated array
===
ANSWER: 
[
  {
    "id": 501,
    "name": "Apple",
    "color": "Red",
    "taste": "Sweet"
  },
  {
    "id": 502,
    "name": "Banana",
    "color": "Yellow",
    "taste": "Sweet"
  },
  {
    "id": 503,
    "name": "Orange",
    "color": "Orange",
    "taste": "Citrusy"
  },
  {
    "id": 504,
    "name": "Grapes",
    "color": "Purple",
    "taste": "Sweet"
  },
  {
    "id": 505,
    "name": "Kiwi",
    "color": "Green",
    "taste": "Tangy"
  },
  {
    "id": 506,
    "name": "Mango",
    "color": "Yellow",
    "taste": "Sweet"
  }
]
**********/

function addFruit(fruits, fruit) {
    fruits.push(fruit); // using push method to add new object
    return fruits;
  }
  
  const newFruit = { // the new object we want to add
        "id": 506,
        "name": "Mango",
        "color": "Yellow",
        "taste": "Sweet"
 };
  
console.log(addFruit(fruits, newFruit)); // calling function 



/**********
Question 4:
countSweetFruits(fruits):
- receives an array of fruit objects
- returns the number of fruits with a sweet taste
===
ANSWER: 4
**********/

function countSweetFruits(fruits) {
    let count = 0; // setting varibale count 
    for (let i = 0; i < fruits.length; i++) { // iterating through the entire length of the array
        if (fruits[i].taste === "Sweet") { /* using if to check if we have the taste "Sweet" making sure we put 
            fruits.taste so the program iterates in every taste inside the object */
            count ++; // 
        }
    }
    return count++; // return the numbers that were found 
  }
console.log(countSweetFruits(fruits)); // calling function 
