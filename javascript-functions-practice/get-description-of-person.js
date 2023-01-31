/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var occupation = person.occupation;
  var birthPlace = person.birthPlace;
  return name + ' is a ' + occupation + ' from ' + birthPlace + '.';
  // return `${name} is a ${occupation} from ${birthPlace}`
  // return person.name + " is a" + person.occupation + "from " + person.birthplace + "."
}
// console.log("Ada Lovelace")
