var returnAfterTimeout = function (param, callback) {
  setTimeout(function() {
    callback(null, param);
  }, 1000*Math.random());
};

/*SERIES*/
returnAfterTimeout('bananas', function (err, result) {
  if (err) {
    throw err;
  }
  console.dir(result);
  returnAfterTimeout('are', function (err, result) {
    if (err) {
      throw err;
    }
    console.dir(result);
    returnAfterTimeout('good', function (err, result) {
      if (err) {
        throw err;
      }
      console.dir(result);
    });
  });
});

/*PARALLEL*/
// var results = {};
// var parallelCB = function (bananas, are, good) {
//   if (bananas) {
//     results.bananas = bananas;
//   }

//   if (are) {
//     results.are = are;
//   }

//   if (good) {
//     results.good = good;
//   }

//   if (results.good && results.bananas && results.are) {
//     console.dir(results.bananas);
//     console.dir(results.are);
//     console.dir(results.good);
//   }
// };

// returnAfterTimeout('bananas', function (err, result) {
//   parallelCB(result);
// });
// returnAfterTimeout('are', function (err, result) {
//   parallelCB(null, result);
// });
// returnAfterTimeout('good', function (err, result) {
//   parallelCB(null, null, result);
// })