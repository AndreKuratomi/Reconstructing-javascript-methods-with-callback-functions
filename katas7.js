'use strict';

let arr = [1,2,3,4,5];
let arr2 = [6,7,8,9,10,'katas7'];
console.log(arr);

// 1) forEach() e newForEach(): 
console.log('1) NewForEach:')
const newForEach = (array, cb1) => {
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        cb1(elt, index, array);
    }
};

const cb1 = (elt, index, array) => {
    console.log('a[' + index + '] = ' + elt);
};

console.log(newForEach(arr, cb1));
console.log(arr.forEach(cb1));

// 2) fill() e newFill():
console.log('2) NewFill:')
const newFill = (array, value, start, end) => {
    let newArr = [];
    if (start === undefined) start = 0;
    if (end === undefined) end = array.length;
    for (let count = 0; count < array.length; count++) {
        if (count >= start && count < end) {
            newArr.push(value);
        } else {
            newArr.push(array[count]);
        }
    }
    return newArr;
}
console.log(newFill(arr, 10, 3, 5));
console.log(arr.fill(10, 3, 5));

arr = [1,2,3,4,5];


// 3) map() e newMap():
console.log('3) NewMap:')
const newMap = (array, cb2) => {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        newArr.push(cb2(elt, index, array));
    }
    return newArr;
};

const cb2 = (elt, index, array) => {
    elt = array[index];
    elt **= 3;
    return elt;
};
console.log(newMap(arr, cb2));
console.log(arr.map(cb2));


// 4) some() e newSome():
console.log('4) NewSome:')
const newSome = (array, cb3) => {
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        if (cb3(elt, index, array)) {
            return true;
        }
    }
    return false;
};

const cb3 = (elt, index, array) => {
    elt = array[index];
    return elt % 2 === 0;
};

console.log(newSome(arr, cb3));
console.log(arr.some(cb3));


// 5) find() e newFind():
console.log('5) NewFind:')
const newFind = (array, cb4) => {
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        if (cb4(elt, index, array)) {
            return elt;
        }
    }
    return undefined;
};

const cb4 = (elt, index, array) => {
    elt = array[index];
    return elt < 5;
};

console.log(newFind(arr, cb4));
console.log(arr.find(cb4));


// 6) findIndex() e newFindIndex():
const newFindIndex = (array, cb5) => {
    console.log('6) NewFindIndex:')
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        if (cb5(elt, index, array)) {
            return index;
        }
    }
    return -1;
};

const cb5 = (elt, index, array) => {
    elt = array[index];
    return elt < 6;
};

console.log(newFindIndex(arr, cb5));
console.log(arr.findIndex(cb5));


// 7) every() e newEvery:
console.log('7) NewEvery:')
const newEvery = (array, cb6) => {
    if (array === []) {
        return true;
    }
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        if (cb6(elt, index, array) === false) {
            return false;
        }
    }
    return true;
};

const cb6 = (elt, index, array) => {
    elt = array[index];
    return elt < 6;
};

console.log(newEvery(arr, cb6));
console.log(arr.every(cb6));


// 8) filter() e newFilter: 
console.log('8) NewFilter:')
const newFilter = (array, cb7) => {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        let elt = array[index];
        if (cb7(elt, index, array)) {
            newArray.push(elt)
        }
    }
    return newArray;
};

const cb7 = (elt, index, array) => {
    elt = array[index];
    return elt > 3;
};

console.log(newFilter(arr, cb7));
console.log(arr.filter(cb7));


// 9) concat() e newConcat:
console.log('9) NewConcat:')
const newConcat = (array, array2) => {
    let newArray = array;
    for (let index = 0; index < array2.length; index++) {
        let elt = array2[index];
        newArray.push(elt);
    }
    return newArray;
};
console.log(newConcat(arr, arr2));
arr = [1,2,3,4,5];
console.log(arr.concat(arr2));



let arr3 = [1,2,3,4,5];


// 10) includes() e newIncludes():
console.log('10) NewIncludes:')
const newIncludes = (array, elt, fromIndex) => {
    if (fromIndex === undefined) {
        fromIndex = 0;
    }
    if (fromIndex >= array.length) {
        return false;
    }
    if (fromIndex < 0) {
        let computedIndex = array.length + fromIndex;
        let calculation = -1 * arr.length;
        if (computedIndex <= calculation) {
            for (let index = 0; index < array.length; index++) {
                let elem = array[index];
                if (elt === elem) {
                    return true;
                }
            }
            return false;
        } else {
            for (let index = array.length-1; index >= 0; index--) {
                let elem = array[index];
                if (elt === elem) {
                    return true;
                }
            }
            return false;
        }
    }
    if (fromIndex > 0) {
        for (let index = fromIndex; index < array.length; index++) {
            let elem = array[index];
            if (elt === elem) {
                return true;
            }
        }
        return false;
    }
};
console.log(newIncludes(arr3, 4, -3));
console.log(arr3.includes(4, -3));

// Reproduza a função includes() , argumentos e valor de retorno


// 11) indexOf() e newIndexOf:
const newIndexOf = (array, searchElt, fromIndex) => {
    console.log('11) NewIndexOf:')
    if (fromIndex === undefined) {
        fromIndex = 0;
    }
    if (fromIndex >= array.length) {
        return -1;
    }
    if (fromIndex < 0) {
        for (let index = array.length-1; index >= 0; index--) {
            let elt = array[index];
            if (elt === searchElt) {
                return index;
            }
        }
    }
    for (let index = fromIndex; index < array.length; index++) {
        let elt = array[index];
        if (elt === searchElt) {
            return index;
        }
    }
    return -1;
};
console.log(newIndexOf(arr3, 5, -1));
console.log(arr3.indexOf(5, -1));


// 12) join() e newJoin():
console.log('12) NewJoin:')
const newJoin = (array, separator) => {
    if (separator === undefined || typeof separator !== 'string') separator = '';
    let string = '';
    for (let count = 0; count < array.length; count++) {
        if (count === array.length-1) {
            string += array[count];
        } else {
            string += array[count] + separator;
        }
    }
    return string;
};
console.log(newJoin(arr3, 'KATAS7!'));
console.log(arr3.join('KATAS7!'));


// 13) reduce() e newReduce():
console.log('13) NewReduce:')
// const newReduce = (array, cb8) => {
//     return cb8((acc, value, index, array), 10);
// };

// const cb8 = (acc, value, index, array, initialValue) => {
//     if (initialValue === undefined) {
//         index = 0;
//         acc = array[index];
//         value = array[index+1];      
//     } else {
//         acc = initialValue;
//         index = 1;
//         value = array[index]
//     }
//     // let value = array[index];
//     return acc + value, initialValue;
// };

// console.log(newReduce(arr3, cb8));
// console.log(arr3.reduce(acc, value, index, arr3), 10);
// Reproduza a função reduce() sua callback, argumentos e valor de retorno


// 14) slice() e newSlice():
console.log('14) NewSlice:')
const newSlice = (array, start, end) => {
    let newArray = [];
    if (start >= array.length) {
        return newArray;
    }
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined || end > array.length) {
        end = array.length;
    }
    if (end < 0) {
        end = array.length + end;
    }
    if (start < 0) {
        console.log('oi')
        for (let index = array.length - 1; index > end; index++) { //DÚVIDAS AQUI
            newArray.push(array[index]);
        }
        return newArray;
    } 
    if (start >= 0) {
        for (let index = start; index < end; index++) {
            newArray.push(array[index]);
        }
        return newArray;
    }
};
console.log(newSlice(arr, 2, -1));
console.log(arr.slice(2, -1));
// Reproduza a função slice(), argumentos e valor de retorno

let arr4 = [1,2,3,4,[5,6,7,[8,9,[10]]]];

// 15) flat() e newFlat():
console.log('15) NewFlat:')
const newFlat = (array, depth) => {
    if (depth === undefined) {
        depth = 1;
    }
    let newArray = [];
    let deepness = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === typeof 'object' && deepness < depth) {
            console.log('EI!')
            deepness += 1;
            for (let j = 0; j < array[j].length; j++) {
                if (typeof array[i][j] === 'object' && deepness < depth) {
                    deepness += 1;
                    for (let k = 0; k < array[k].length; k++) {
                        newArray.push(arr[i][j][k]);
                    }
                }
                newArray.push(arr[i][j]);
            }
            newArray.push(arr[i][j]);
            console.log(newArray)
        }
        newArray.push(arr[i]);
    }
    return newArray;
};
console.log(newFlat(arr, 4));
console.log(arr4.flat(4));
// Reproduza a função flat(), argumentos e valor de retorno

let arr5 = [1,2,3,4,5,[6,7,8,9,10]];

// 16) flatMap() e newFlatMap():
console.log('16) NewFlatMap:')
const newFlatMap = (array, cb9) => {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        let value = array[index];
        newArr.push(cb9(value, index, array));
    }
    return newArr;
};

const cb9 = (value, index, array) => {
    value = array[index];
    if (array[index] === typeof 'object') {
        for (let j = 0; j < array[index].length; j++) {
            value *= 10;
        }
    }
    value *= 10;
    return value;
};

console.log(newFlatMap(arr5, cb9));
console.log(arr5.flatMap(cb9));
// Reproduza a função flatMat() sua callback, argumentos e valor de retorno


// 17) Array.of() e newArrayOf():
console.log('17) NewArrayOf:')
const newArrayOf = element => {
    let newArray = [];
    if (element === undefined) return newArray;
    newArray.push(element);
    return newArray;
};

console.log(newArrayOf('e tudo ainda não se acabou'));
console.log(Array.of('e tudo ainda não se acabou'));