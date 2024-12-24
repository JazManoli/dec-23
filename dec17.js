// pass by value
function updateValue(value){
    value=value+1;
    return value;
}
let num = 10;
console.log(updateValue(num));
console.log(num);


//pass by reference
function updateArray(arr){
    arr.push(4);
    return arr;
}

let myArray =[1,2,3,]
console.log(updateArray(myArray));
console.log(myArray);
///////

//Calculate total cost to put down tiles on the whole floor
// Helper function to calculate area
function calculateArea(length,width){
    return length * width;

}

//Helper function to calculate tile cost
function calculateTileCost(area, tilePrice){
    return area * tilePrice;

}

// Main function to calculate total cost
function calculateTotalCost(length, width, tilePrice){
    let area = calculateArea(length, width);
    let totalCost = calculateTileCost(area,tilePrice);
    return totalCost;
}
//Example usage
let bathroomlength = 10;
letbathroomwidth =8;
let tilePricePerSqft =5;

let totalTileCost = calculateTotalcost(bathroomLength, bathroomwidth, tilePricePerSqft);
console.log(`Total cost to replace bathroom tiles: $${total}`);