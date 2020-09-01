
let input = prompt('Please input string');

let regexUpperCase = /[A-Z]/;

if (regexUpperCase.test(input.charAt(0))){
    alert ('The first letter of this input is capitalized');
} else{
    alert('The first letter of this input is NOT capitalized')

}