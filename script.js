"use strict";
const sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(" ");

const reversedOrderWords = words.reverse();

const reversedWords = reversedOrderWords.map((word) =>
  word.split("").reverse().join("")
);

const finalOutput = reversedWords.join(" ");

console.log(finalOutput);
