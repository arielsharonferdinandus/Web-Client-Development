function isPalindrome(str: string): string {
    let reversed = str.split("").reverse().join("");
    return str === reversed ? "palindrome" : "not palindrome";
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));