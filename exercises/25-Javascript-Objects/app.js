var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 33], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [1, 2, 3, 4],
    significant_other: null
};

var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  let sumOfPersonLuckyNumber=0,numeros = person.lucky_numbers;
  let sumOfPerson2LuckyNumber=0,numeros2 = person2.lucky_numbers;
  let sumOfPerson3LuckyNumber=0,numeros3 = person3.lucky_numbers;

  for(let i of numeros) sumOfPersonLuckyNumber+=i;{
    for(let i of numeros2) sumOfPerson2LuckyNumber+=i;{
        for(let i of numeros3) sumOfPerson3LuckyNumber+=i; 
    }
  }
   
    return sumOfPersonLuckyNumber+sumOfPerson2LuckyNumber+sumOfPerson3LuckyNumber; 
}


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 