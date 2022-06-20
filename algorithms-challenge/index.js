//
// ─── TASK 1 ─────────────────────────────────────────────────────────────────────
//

//Returns an array of unique and alphabetically ordered items:
function uniqueSort(arr) {
    return sortAlphabetically([...new Set(arr)]);
}

//
// ─── TASK 2 ─────────────────────────────────────────────────────────────────────

//Returns wether two strings are anagrams of each other:
function checkIfAnagram(stringA, stringB) {
    if (stringA === stringB || stringA.length !== stringB.length) {
      return false;
    }
    else {
      const  str1 = sortAlphabetically(stringA.split('')).join('');
      const  str2 = sortAlphabetically(stringB.split('')).join('');
      return str1 === str2;
    }
}

//
// ─── UTILS ──────────────────────────────────────────────────────────────────────
//

//Abstracts the alphabetical sorting functionality
function sortAlphabetically(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
}


/* Uncomment for testing purposes
console.log(uniqueSort(['testString', 'anotherString', 'testString']))
console.log(checkIfAnagram('testString', 'Stestring'))
*/