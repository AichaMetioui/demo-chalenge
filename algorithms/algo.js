// Question 1:

//we will define an array of numbers 
// we will add a new array which we will put our reverse of first array 
//we will for loop to iterate through the first array 
//we will unshift the numbers to newarray

const X = [2, 1, 6, 4, -7]
var Newarray = []

for (let i = 0; i < X.length; i++) {
    Newarray.unshift(X[i])
}
console.log(Newarray);

// Question 2:
//Given an array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1]. 
// Solve this recursively. For this algorithm, write the pseudocode, before your JS code.
// define an array 
//for loop to iterate through the array 
//add a condition to know if i smaller than 0 


const Array = [1, -2, 4, 1,]
for (let i = 0; i < Array.length; i++) {
    if (Array[i] < 0) {
        Array.splice(i, 1)
        i = i - 1
    }
}
console.log(Array);




//question 4: 
//fisrt steep :
// define an array of numbers
// add a variable with 0 value 
//define a function to find largest number in array
//for loop to iterate through the array
//make a condition to comapare the max with all aray numbers and each time save the largest such a max 
//return he max 
//second steep :
//define an array of arrays 
//define a variable of empty array
//define a function 
//make an empty variable 
////for loop to iterate through the array
//call the first function to make the same in each arrays and give it a variable max for ex 
//push max in our empty variable 
// return this variable 



const Array1 = [4, 5, 9]
let Max = 0
function myarr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Max) {
            Max = arr[i]
        }
    }
    return Max
}
console.log(myarr(Array1));

const Array2 = [[4, 5, 9], [10, 5, 4], [4, 5, 7], [4, 5, 1]]
let result = []
function Fun(arr) {
    for (let i = 0; i < arr.length; i++) {

        let MaX = myarr(Array2[i])
        result.push(MaX)

    }
    return result
}
console.log(Fun(Array2));

//Question 5:
//define a var of string
//define a function take a string parameter
//change the litters of string to lowercase 
//for loop iterate through string
//change the first littre in element of string to uppercase 
// return string with join the liters 

const string = "heLlO tHeRe"

function MyFun(string) {
    const arr = string.toLowerCase("").split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)

    }
    return arr.join(" ")
}

console.log(MyFun(string));


//Question 3 :
// we define an array 
//define a function take array param
//add two variables 
//for loop iterate through array 
//make a first variable equal index 
// second for loop iterate numbers in array start with second element in array 
//make a consition to compare the both for loop 

const IntArr = [2, 7, 1, -2]
function sortselection(array) {
    var min
    var temp
    for (let i = 0; i < array.length; i++) {
        min = i
        for (let j= i + 1; j< array.length; j++) {
            if (array[j] < array[min]) {
                min= j
            }
        }
        temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
    return array
}


console.log(sortselection(IntArr));




