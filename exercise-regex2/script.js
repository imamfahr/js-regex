let input = prompt('Please input a phone number');

let regexPhoneNumberCheck = /^.{10,12}$/

console.log(regexPhoneNumberCheck.test(input))