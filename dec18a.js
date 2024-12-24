// Question 1 
//What is a high order function, and how can it be used to process an array
// What is a call back function? Provide an example where an array is processed

//Higher Order function

function processArray(arr,callback) {
let result =[];
for (let i=0; i<arr.length; i++) {
result.push(callback(arr(i)));

}
return result;

}


//Call back function
function double(num){
    return num * 2;

}
function square () {
return num* num;


}
    



//Using the higher order function

let numbers =[2,3,4,5];
console.log(processArray.Array(numbers, double));