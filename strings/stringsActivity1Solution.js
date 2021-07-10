/*
 * Return true/false based on if search keyword was found in array
 * searchArray - array of strings
 * searchKeyword - search keyword to match
 */
function arrayHas(searchArray, searchKeyword) {
    // returns true if any of the array element matches
    for (let i = 0; i < searchArray.length; i++) {
        let lowerCasedKeyword = searchKeyword.toLowerCase();
        let lowerCasedElement = searchArray[i].toLowerCase();

        if (lowerCasedElement === lowerCasedKeyword) {
            return true
        }
    }

    // return false as none of the array elements matched search keyword
    return false;
}

console.log(arrayHas(["hi", "hello", "hey"], "hello")); // should return true;
console.log(arrayHas(["hi", "hello", "hey"], "howdi")); // should return false;
console.log(arrayHas(["hi", "hello", "hey"], "HELLO")); // should return true;
