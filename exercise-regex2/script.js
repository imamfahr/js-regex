let input = prompt('Please input a phone number');

let regexPhoneNumberCheck = /\d{10,12}$/

console.log(regexPhoneNumberCheck.test(input))