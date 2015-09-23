/*
  list = array of characters [1,2,3,a,b,c]
  maxLen = int
*/
var getPermutations = function(list, maxLen) {
    // Copy initial values as arrays
    var perm = list.map(function(val) {
        return [val]
    })
    // Our permutation generator
    var generate = function(perm, maxLen, currLen) {
        // Reached desired length
        if (currLen === maxLen) {
            return perm
        }
        // For each existing permutation
        for (var i = 0, len = perm.length; i < len; i++) {
            var currPerm = perm.shift()
            // Create new permutation
            for (var k = 0; k < list.length; k++) {
                perm.push(currPerm.concat(list[k]))
            }
        }
        // Recurse
        return generate(perm, maxLen, currLen + 1)
    }
    // Start with size 1 because of initial values
    return generate(perm, maxLen, 1)
}

module.exports = getPermutations
