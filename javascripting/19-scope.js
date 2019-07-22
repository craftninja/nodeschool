var a = 1, b = 2, c = 3;
// not here, be needs to be 8
// not here, c needs to be 6
(function firstFunction(){
  var b = 5, c = 6;
  // not here, be needs to be 8
  (function secondFunction(){
    var b = 8;
    console.log("a: "+a+", b: "+b+", c: "+c);
    (function thirdFunction(){
      var a = 7, c = 9;
      // not here, a needs to be 1
      // not here, c needs to be 6
      (function fourthFunction(){
        var a = 1, c = 8;
        // not here, c needs to be 6
      })();
    })();
  })();
})();

// console.log("should be - ", "a: 1, b: 8, c: 6");
