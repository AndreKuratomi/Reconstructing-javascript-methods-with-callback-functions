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

newForEach(arr, cb1);
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


// 13) reduce() e newReduce:

// Reproduza a função reduce() sua callback, argumentos e valor de retorno


// 14) slice()newSlice:
 
// Reproduza a função slice(), argumentos e valor de retorno


// 15) flat()newFlat:
 
// Reproduza a função flat(), argumentos e valor de retorno


// 16) flatMap()newFlatMap:

// Reproduza a função flatMat() sua callback, argumentos e valor de retorno


// 17) Array.of()newArrayOf:

// Reproduza a função Array.of(), argumentos e valor de retorno



// Sua implementação de cada um dos métodos de iteração acima deve resultar nos mesmos argumentos e valores de retorno.

// Katas de JavasScript 7 - Callbacks
// Nesta entrega, você irá exercitar a criação e o uso das funções callback, e irá se familiarizar com o modo no qual os métodos 
// incorporados do JavaScript funcionam nos bastidores.

// O JavaScript fornece vários "métodos de iteração" baseados no mesmo tipo de padrão de callback que você viu no caso do forEach() 
// na aula sobre Funções Callback. Essencialmente, eles são loops prontos, com alguns comportamentos adicionados para ter um pouco 
// de variação do padrão.

// Há várias formas de recriar as funções. Como o foco é a lógica, use esta para facilitar nos testes:

// function nomeDaFuncao(array, callback) {
//     // conteúdo da função
// }
// Não se preocupe caso tenha visto formas de criar com prototype ;) Depois você poderá voltar e refazer.

// Sua Tarefa
// Sua tarefa será reproduzir o comportamento desses métodos de Array com suas funções callback, incluindo os parametros opcionais e 
// sem usar as versões incorporadas do JavaScript:


