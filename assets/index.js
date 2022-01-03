const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function () { }, () => { }, 10, 100, {}];
const exampleArray2 = [
    [10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]
]

function Point(x, y) {
    this.x = x;
    this.y = y;
}

//Function that cleans the array
const arrayCleaner = (array) => {
    return oneArr(array).filter(value => typeof value === 'number');
};


//Exercise 1: Create a function that clears the shit array using declarative programming (split, join, or any of them). 
//The function should only leave the strings as the result.

const cleaningFunction = (arr) => {
    let stringResult = arr.filter(value => typeof value === 'string');
    return stringResult;
};

console.log(cleaningFunction(shit));

//Exercise 2: Create a function that calculates the distance between two points using the object that I gave you as Point, 
//you must use imperative programming for this exercise. Your function must take two parameters, point a and point b and calculate the distance.

let a = new Point(6, 3);
let b = new Point(10, 4);

const distancePoint = (pointA, pointB) => {
    return new Point((pointB.x - pointA.x), (pointB.y - pointA.y));
};
console.log(distancePoint(a, b));

//Exercise 3: Create a function that compares the values ​​of exampleArray2 and exampleArray1 but looks at the type

const Compare = (array1, array2) => {
    let cleanArray2 = onlyArr(array2);
    let stopIndex = 0;
    if (array1.length === cleanArray2.length) {
        let i = 0;
        while (array1[i] === cleanArray2[i]) {
            i++;
            stopIndex = i;
        }
    }
    return 'Stop it, stop it, stop it ... Arrays are different in index ' + stopIndex
}

//Function that traverses nested arrays and leaves a single array.

const onlyArr = (array) => {
    for (i in array) {
        for (j in array[i]) {
            let indexJ = array[j];
            return indexJ;
        };
    };
};

console.log(Compare(exampleArray, exampleArray2));

//Exercise 4: Create a function that finds the value 4 in the exampleArray array

//Functional programming

const findFour = (array) =>{
    let i = 0;
    while (array[i] !== 4){
        i++
    }
    return i
};
console.log (findFour(exampleArray))

//Imperative programming

function imperative(array, value) {
    return array.indexOf(value)
};
console.log(imperative(exampleArray, 4))

