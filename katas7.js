'use strict';

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

// forEach()
// fill()
// map()
// some()
// find()
// findIndex()
// every()
// filter()
// concat()
// includes()
// indexOf()
// join()
// reduce()
// slice()
// flat()
// flatMap()
// Array.of()
// Dê os seguintes nomes a cada uma das funções: newForEach, newFill, newMap, newSome, newFind, newFindIndex, newEvery, newFilter, 
// newConcat, newIncludes, newIndexOf, newJoin, newReduce, newSlice, newFlat, newFlatMap e newArrayOf. 
// Sua implementação de cada um dos métodos de iteração acima deve resultar nos mesmos argumentos e valores de retorno.

// IMPORTANTE: Para propósitos de teste/avaliação, é importante que você dê o nome do repositório de 'katas7', e que o nome das 
// funções seja igual ao padrão mencionado acima.

// Por exemplo:
// function myCallback(value) {
//     return `${value} é muito bom!`
// };

// let myArr = ["maçã", "uva", "pera"];

// let retornoMap = myArr.map(myCallback);
// let retornoNewMap = newMap(myArr, myCallback);

// retornoMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
// retornoNewMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
// myArr // Deve retornar ["maçã", "uva", "pera"];
// Note que possuem o mesmo retorno e o array original não foi modificado, conforme a documentação do Array.prototype.map().

// ANTES DE ENVIAR
// Reproduza a função forEach() sua callback, argumentos e valor de retorno
// Reproduza a função fill() sua callback, argumentos e valor de retorno
// Reproduza a função map() sua callback, argumentos e valor de retorno
// Reproduza a função some() sua callback, argumentos e valor de retorno
// Reproduza a função find() sua callback, argumentos e valor de retorno
// Reproduza a função findIndex() sua callback, argumentos e valor de retorno
// Reproduza a função every() sua callback, argumentos e valor de retorno
// Reproduza a função filter() sua callback, argumentos e valor de retorno
// Reproduza a função concat() , argumentos e valor de retorno
// Reproduza a função includes() , argumentos e valor de retorno
// Reproduza a função indexOf(), argumentos e valor de retorno
// Reproduza a função join(), argumentos e valor de retorno
// Reproduza a função reduce() sua callback, argumentos e valor de retorno
// Reproduza a função slice(), argumentos e valor de retorno
// Reproduza a função flat(), argumentos e valor de retorno
// Reproduza a função flatMat() sua callback, argumentos e valor de retorno
// Reproduza a função Array.of(), argumentos e valor de retorno