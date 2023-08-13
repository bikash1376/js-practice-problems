function checkPallindrome(str) {
    let reversed = str.split("").reverse().join("")
    if (reversed == str) {
        return true
    }
    else {
        return false
    }
}
console.log(checkPallindrome('peep'))
console.log(checkPallindrome('loop'))
