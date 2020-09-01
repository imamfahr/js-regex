let input = prompt('What are you searching for?')



let regexSearch1 = /^Bagaimana cara memulai usaha bisnis/
let regexSearch2 = /^Bootcamp impact byte/
let regexSearch3 = /^Bagaimana cara memulai usaha bisnis/

console.log(regexSearch1.test(input))
console.log(regexSearch2.test(input))
console.log(regexSearch3.test(input))