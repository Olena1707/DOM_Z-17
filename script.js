"use strict";

let num = prompt("Введите число");
let rate = prompt("Введите степень");
let mult = num ** rate;

function result (num, rate = 1) {
    if (typeof(num) !== "number" && typeof(rate) !== "number") {
alert("some error");
    } else {
    return mult;
    }
}

alert(result());