// /* exported uniqueQuadratic, uniqueLinear */

// function uniqueLinear(words) {
//   const seen = {};                  // _ * _ = O(?)
//   const unique = [];                // _ * _ = O(?)
//   for (
//     let i = 0;                      // _ * _ = O(?)
//     i < words.length;               // _ * _ = O(?)
//     i++                             // _ * _ = O(?)
//   ) {
//     const word = words[i];          // _ * _ = O(?)
//     if (!seen[word]) {              // _ * _ = O(?)
//       seen[word] = true;            // _ * _ = O(?)
//       unique[unique.length] = word; // _ * _ = O(?)
//     }
//   }
//   return unique;                    // _ * _ = O(?)
// } // Big O Notation for uniqueLinear: O(?)

// function uniqueQuadratic(words) {
//   const unique = [];                // _ * _ = O(?)
//   for (
//     let i = 0;                      // _ * _ = O(?)
//     i < words.length;               // _ * _ = O(?)
//     i++                             // _ * _ = O(?)
//   ) {
//     const word = words[i];          // _ * _ = O(?)
//     let isUnique = true;            // _ * _ = O(?)
//     for (
//       let c = 0;                    // _ * _ = O(?)
//       c < i;                        // _ * _ = O(?)
//       c++                           // _ * _ = O(?)
//     ) {
//       const comparing = words[c];   // _ * _ = O(?)
//       if (comparing === word) {     // _ * _ = O(?)
//         isUnique = false;           // _ * _ = O(?)
//       }
//     }
//     if (isUnique) {                 // _ * _ = O(?)
//       unique[unique.length] = word; // _ * _ = O(?)
//     }
//   }
//   return unique;                    // _ * _ = O(?)
// } // Big O Notation for uniqueQuadratic: O(?)

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(?)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    if (!seen[word]) {              // 1 * 1 = O(1)
      seen[word] = true;            // 1 * 1 = O(1)
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueLinear: O(?)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(?)
  for (
    let i = 0;                      // 1 * 1 = O(?)
    i < words.length;               // 2 * n = O(?)
    i++                             // 2 * n = O(?)
  ) {
    const word = words[i];          // 1 * _ = O(?)
    let isUnique = true;            // _ * _ = O(?)
    for (
      let c = 0;                    // _ * _ = O(?)
      c < i;                        // 1 * _ = O(?)
      c++                           // 1 * _ = O(?)
    ) {
      const comparing = words[c];   // _ * _ = O(?)
      if (comparing === word) {     // _ * _ = O(?)
        isUnique = false;           // _ * _ = O(?)
      }
    }
    if (isUnique) {                 // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueQuadratic: O(?)
