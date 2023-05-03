console.log("-----------numArray = [ 1, 2, 3, 4, 5]--------------")

let numArray = [ 1, 2, 3, 4, 5];
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

// <? php
// $stack = array("orange", "banana");
// array_push($stack, "apple", "raspberry");
// print_r($stack);
// ?>

console.log("------------numArray.push(6)-------------")

numArray.push(6);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("-------------delete numArray[5]------------")

delete numArray[5];
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("------------numArray.splice(2,1)-------------")

numArray.splice(2,1);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("------------numArray.splice(1, 0, 6)-------------")

numArray.splice(1, 0, 6);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("------------numArray.splice(5, 1, 3)-------------")

numArray.splice(5, 1, 3);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)


console.log("------------numArray.splice(0, 0, 0)-------------")

numArray.splice(0, 0, 0);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("------------numArray.splice(2, 1, 7, 8)-------------")

numArray.splice(2, 1, 7, 8);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("------------numArray.splice(2, 0, 9, 10)-------------")

numArray.splice(2, 0, 9, 10);
console.log(numArray);

numArray.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)

console.log("------------numArray.indexOf(4)-------------")

console.log(numArray);
console.log("indexOf(4) : "+numArray.indexOf(4));

console.log("------------numArray2 = [1, 2, 2, 3, 2, 4, 4, 5]-------------")
let numArray2 = [1, 2, 2, 3, 2, 4, 4, 5];
console.log(numArray2);

console.log("------------numArray2.indexOf(2)-------------")

console.log(numArray2);
console.log("indexOf(2) : " + numArray2.indexOf(2));

console.log("------------numArray2.lastIndexOf(2)-------------")

console.log(numArray2);
console.log("lastIndexOf(2) : " + numArray2.lastIndexOf(2));

console.log("------------slice fileName = 'javaScript.log.php'-------------")
let fileName = 'javaScript.log.php'
// fileName = 'aaa.bbb.ccc'
console.log("indexOf('.') : " + fileName.indexOf('.'));
let firstIndex = fileName.indexOf('.');
console.log("lastIndexOf('.') : " + fileName.lastIndexOf('.'));
let lastIndex = fileName.lastIndexOf('.');
console.log("slice(0, firstIndex) : " + fileName.slice(0, firstIndex));
console.log("slice(firstIndex + 1, lastIndex) : " + fileName.slice(firstIndex + 1, lastIndex));
console.log("slice(lastIndex + 1) : " + fileName.slice(lastIndex + 1));



console.log("-------split fileName = 'javaScript.log.php'--------")
fileName = 'javaScript.log.php';
let splitFileName = fileName.split('.');
splitFileName.forEach(
    function (val, key) {
        console.log( key +" : "+ val );
    }
    )

console.log("------------middleIndexOfTarget----------")
let numArray3 = [1, 2, 2, 3, 2, 4, 2, 2, 4, 2, 2, 5];
console.log(numArray3);
const targetNum = 2;
const targetIndex = numArray3.indexOf(targetNum);
const middleIndexOfTarget = Math.floor(targetIndex + numArray3.lastIndexOf(targetNum) / 2);
console.log(middleIndexOfTarget);

console.log("------------concat----------")
let concatArrOne = [1, 2, 3]; 
console.log("concatArrOne : " + concatArrOne);
let concatArrTwo = [10, 20, 30];
console.log("concatArrTwo : " + concatArrTwo);
let arrayCon = concatArrOne.concat(concatArrTwo);
console.log("concat result : " + arrayCon);

console.log("------------includes----------")
console.log("Is it has num (?)")
console.log(" numArray : " + numArray)
console.log("numArray.includes(1) : " + numArray.includes(1))
console.log(" numArray2 : " + numArray2)
console.log("numArray2.includes(7) : " + numArray2.includes(7))
console.log(" numArray3 : " + numArray3)
console.log("numArray3.includes(2) : " + numArray3.includes(2))
console.log(" concatArrOne : " + concatArrOne)
console.log("concatArrOne.includes(10) : " + concatArrOne.includes(10))

console.log("------------sort----------")
const arrSort = [6, 3, 100, 40, 3, 6, 1, 2, 7];
console.log(" arrSort : " + arrSort)
console.log(" arrSort.sort() : " + arrSort.sort())
console.log(" arrSort.sort((a,b)=> a - b)) : " + arrSort.sort((a, b) => a - b))
console.log(" arrSort.sort((a,b)=> b - a)) : " + arrSort.sort((a,b) => b - a))

console.log("------------join----------")
const arrJoin = ["안", "녕하", "세요"];
console.log(" arrJoin : " + arrJoin)
console.log(" arrJoin.join('') : " + arrJoin.join(""))

console.log("------------every----------")
