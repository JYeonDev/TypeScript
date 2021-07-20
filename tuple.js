"use strict";
var x; // 배열에 타입이 한가지가 아닌경우 사용
x = ['hello', 39]; // 입력한 타입에 순서와 길이가 일치해야한다.
// x = [10, 'Mark']  // 순서가 달라서 에러 발생
// x[2] = 'Mark';  // 0,1 인덱스까지만 입력가능한데 2번째 인덱스에 입력하려해서 에러발생
var person = ['Mark', 39];
var first = person[0], second = person[1];
