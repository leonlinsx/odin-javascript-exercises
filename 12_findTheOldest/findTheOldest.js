const findAge = function(arr1) {
    let currYear = new Date().getFullYear()
    arr1.map((person) => {
        if (person.yearOfDeath){
            person.age = person.yearOfDeath - person.yearOfBirth
        } else {
            person.age = currYear - person.yearOfBirth
        }
    })
}

const findTheOldest = function(arr1) {
    findAge(arr1)
    console.log(arr1)
    return arr1.reduce((oldest, curr) => {
      return oldest.age < curr.age ? curr : oldest 
    })
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
