/* exported getValue */
function getValue(object, key) {
  return object[key];
}

// const dave = { firstName: 'David', lastName: 'Thomas' }
// getValue(dave, 'firstName'); // -> "David"
// getValue(dave, 'lastName'); // -> "Thomas"

// const learningFuze = { latitude: 33.6349, longitude: 117.7405 }
// getValue(learningFuze, 'latitude'); // -> 33.6349
// getValue(learningFuze, 'longitude'); // -> 117.7405

// const tim = { name: 'Tim', language: 'JavaScript' }
// getValue(tim, 'age'); // -> undefined
// getValue(tim, 'yearsExperience'); // -> undefined
