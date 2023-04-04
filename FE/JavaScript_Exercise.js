//find elements in array that are divisible by 5
console.log("1.find elements in array that are divisible by 5")
data = [1,5,30,26]
data.forEach(element => {
    if(element%5==0)
    console.log(element)
});

//find and print first index of value 2 and last index of value 3
console.log("2.find and print first index of value 2 and last index of value 3")
data2 = [-1,2,3,4,2,6]

//join and print all of the elements
console.log("3.join and print all of the elements")
data3a = ["A","B","C"]
data3b=[1,2,3]
console.log(data3a.join(', '))
console.log(data3b.join(', '))

//convert all of elements to absloute value of a number
console.log("4.convert all of elements to absloute value of a number")
data4 = [2,-1,-8]
newData4 = data4.map(item => Math.abs(item))
console.log(newData4)

//merge 2 arrays
console.log("5.merge 2 arrays")
arrA = ['a','b','c']
arrB = [1,2,3]
arrC = arrB.concat(arrA)
console.log(arrC)

const isEven = (item) => item%2==0

//every()
console.log("6.isEven using every() function ")
data5a = [1,2,3,4,5]
data5b = [2,4,6]
console.log(data5a.every(isEven)?"yes":"no")
console.log(data5b.every(isEven)?"yes":"no")

// some()
console.log("7.isEven using some() function ")
data6a =[1,2,3,4,5]
data6b = [1,1,3,1,5]
console.log(data6a.some(isEven)?"yes":"no")
console.log(data6b.some(isEven)?"yes":"no")

// find positive numbers => filter()
console.log("8.find positive numbers => filter()")
data7 = [1,-2,3,4,-5]
console.log(data7.filter(item => item>0))

// find first positive number adn index of that number find(), findIndex()
console.log("9.find first positive number and index of that number using find(), findIndex()")
data8a = [-1,-2,3,-4,-5]
data8b = [-1,2,3,4,-5]
data8c = [-1,-2]

function printResult(index,arr){
  if(index>-1){
    return `${index} ${arr[index]}`;
  }
  else
    return "No result";
}
console.log(printResult(data8a.findIndex(item => item>0),data8a))
console.log(printResult(data8b.findIndex(item => item>0),data8b))
console.log(printResult(data8c.findIndex(item => item>0),data8c))

function printResult2(item,arr){
    let index = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==item)
        {
            index =i;
            break;
        }
    }
    return `${index} ${item}`;
}
console.log(printResult2(data8a.find(item => item>0),data8a))

// date object
console.log("HW 2")
function getDateTime(){

let today = new Date();
//getDay(): tra ngay thu i trong tuaan
//getDate(): tra ve ngay theo lich
let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
let time = `${today.getHours()}:${today.getMinutes()}`
let dateTime = time+' '+date;
return dateTime
}
const now = getDateTime();
console.log(now)

//date format
// function allFormatsOfDate({day, month, year}) {
//     // console.log(day)
//     let result = []
// 	let isoDate = new Date(`${month}-${day}-${year}`)
//     let shortDate = new Date(`${month}/${day}/${year}`)
//     let longDate = new 
//     result.push(isoDate)
//     result.push(shortDate)
//     return result;
// }

// const date = { 
// 	day: 28,
// 	month: 12,
// 	year: 2022
// }

// const result = allFormatsOfDate(date)
// console.log(result)
// // 12-28-2022 
// // 12/28/2022
// // 28-12-2022
// // 28/12/2022

// // increase chain
//  function isIncreaseChainNumber(number){

//  }


// caesar cypher  
console.log("HW 5: caesar cypher")
var caesarCypher = function (str, amount) {
    // Wrap the amount
    if (amount < 0) {
      return caesarCypher(str, amount + 26);
    }
  
    // Make an output variable
    var output = "";
  
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
  
      // Append
      output += c;
    }
  
    // All done!
    return output;
  };

  const name = "Hoang Nhan"
  const cypherText = caesarCypher(name, 3)
  console.log(cypherText)

//   highesFreqNumber
console.log("HW 6: highesFreqNumber")
function highestFreqNumber(arr) {
    const map = {};
    let max = 0;
    let min = Infinity;
    arr.forEach((item) => {
      let count = map[item] + 1 || 1;
      map[item] = count;
      if (count > max) {
        max = count;
        min = item;
      } else if (count === max && item < min) {
        min = item;
      }
    });
    return min;
  }
const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) // 7

// contain javascript
console.log("HW 7: contain 'javascript'")
const isIncludeJS = (str) => {
	str = str.toLowerCase()
    return str.includes("javascript")
}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //true
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true

//longest string
console.log("HW 9: longest word")
function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
  }
  
  function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
  }

const str = "Little darlin', it's been a loooooong, cold, lonely winter"

console.log(longestWord(str)) // loooooong

// sum all numbers not 5
console.log("HW 10: sum all numbers not 5")
function sum(number) {
    // must use reduce
    const sum = 0;
    let numArr = number.toString().split('').filter(item=>item!=5);
    return numArr.reduce( (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue),
    sum)
  }
  
  console.log(sum(1231312321378127391237219312n)) // 90
  console.log(sum(99999999999999999999999999999n))// 261
  console.log(sum(12345678908765432123456555566n)) // 98