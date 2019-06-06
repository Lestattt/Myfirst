"use strict";

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      // переведёт промис в состояние fulfilled с результатом "result"
      resolve("result");
    }, 1000);
  
  });
  
 