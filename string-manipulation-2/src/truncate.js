/* exported truncate */
function truncate(length, string) {
  var shortString = '';
  for (var i = 0; i <= length - 1; i++) {
    shortString += string[i];
  }
  shortString += '...';
  return shortString;
}

// console.log(truncate(8, 'All '));
