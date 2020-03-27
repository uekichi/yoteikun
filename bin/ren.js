'use strict';

console.log('hello');

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(11); }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13); }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17); }, 1000);
  });
}

/*
getA().then((a) => {
  return getB().then(() => {
    a * b
  }).then((ab) => {
    getC().then((ab) => {
      ab * c
    });
  });
});
*/

Promise.all([getA(), getB(), getC()]).then((results) => {
  console.log(results[0] * results[1] * results[2]);
});