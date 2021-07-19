"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
var isOk = true;
var isNotOk = new Boolean(true); // 객체로 넘어오기 때문에 실행되지 않음