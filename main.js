var first = function (callback) {
  setTimeout(
    function () {
      callback(null, 'First');
    }, 1000*Math.random()
  );
};

var second = function (callback) {
  setTimeout(
    function () {
      callback(null, 'Second');
    }, 1000*Math.random()
  );
};

var third = function (callback) {
  setTimeout(
    function () {
      callback(null, 'Third');
    }, 1000*Math.random()
  );
};

/*In Series - Messy - Takes longer*/
// var start = new Date();
// first(function (err, result) {
//   console.dir(result);
//   second(function (err, result) {
//     console.dir(result);
//     third(function (err, result) {
//       console.dir(result);
//       var end = new Date();
//       console.log('Time to Completion: ' + (end - start));
//     });
//   })
// });

/*In Parallel - Problem is return in any order, How do I know they've all finished?*/
// first(function (err, result) {
//   console.dir(result);
// });
// second(function (err, result) {
//   console.dir(result);
// });
// third(function (err, result) {
//   console.dir(result);
// });

var async = require('async');

/*Async Series*/
// async.series(
//   {
//     'first': first,
//     'second': second,
//     'third': third
//   },
//   function (err, results) {
//     if (err) {
//       throw err;
//     }
//     console.dir(results);
//   }
// );

/*Async Parallel */
// async.parallel(
//   {
//     first: first,
//     second: second,
//     third: third
//   },
//   function (err, results) {
//     if (err) {
//       throw err;
//     }

//     console.dir(results);
//   }
// )