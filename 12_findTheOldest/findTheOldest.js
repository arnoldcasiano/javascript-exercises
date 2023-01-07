const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  // Add a year of death to person with no year of death
  const find = people.find(person => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = currentYear;
    }
  })


  // map and return a new obj then reduce to return oldest person
  const oldest = people
       .map(person => ({
          name: person.name,
          age: person.yearOfDeath - person.yearOfBirth,
       }))
       .reduce((person1, person2) => {
         if (person1.age > person2.age) {
           return person1;
         } else {
           return person2;
         }
       })
  return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
