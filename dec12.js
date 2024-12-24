// declare arrays

let numbers = [1,2,3,4,5];
let fruits = ["apple", "banana","cherry"];

//access elements 

console.log(numbers[2]);
console.log(fruits[0]);

// modify elements

numbers[3] =20;
fruits[0] = "mango";
console.log(numbers);
console.log(fruits);

///push and pop example 2

let fruit = ["apple", "banana"];
fruit.push("rasberry");
console.log(fruit);

fruit.pop();
console.log(fruits);


//Shift and Unshift
let number = [2,3,4,5];

let first = numbers.shift();
console.log(first);
console.log(number);

//////unshift
numbers.unshift(1);
console.log(numbers);


//slice
let animals = ("cat", "dog", "elephant", "tiger");

let sliced = animals.slice(1,3);
console.log(sliced);

// splice
let colors = [1,1,"yellow","violet"];
colors.splice(1,1,"yellow","violet");
console.log(colors);

colors.splice(1,1);
console.log(colors);

//Sort
let fruits2 = ["babana", "apple", "cherrry"];
let numbers2 = [3, 4, 1, 5];
fruits2.sort();
console.log(fruits2);
fruits.reverse();
console.log(fruits2);
numbers2.reverse();
console.log(numbers2);

/////Aggregation

//concat()
let array1 = [1,2,3];
let array2 = [4,5,6];
let combined = array1.concat(array2);
console.log(combined);

///join
let words = ["Hello", "World", "!"];
let sentence = words.join(" ");
console.log(sentence);

////indexOf() and lastIndexOf()

let b = ["apple", "banana", "cherry","apple"];
console.log(b.indexOf("apple"));
console.log(b.lastIndexOf("apple"));

//spread operarator
//Copying Arrays

let array3 =[1,2,3,4];
let array4 =[...array3];
console.log(array4);

///merging arrays

let array5 =[5,6,7,8];
let merged = [...array3,...array5];
console.log(merged);

///2d array

let matrix = [
    [1,2,3],
    [4,5,6]
    [7,8,9]
];

//access specifid element

console.log(matrix,length);

//iterate through rows an columns

for (let i=0;i< matrix.length; i++){
for (let j=0; j< matrix[i].length; j++)
    console.log(matrix[i] [j]);

}






