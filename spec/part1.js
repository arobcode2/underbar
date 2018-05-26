(function() {
  "use strict";
  describe("Part I", function() {
    describe("identity", function() {
      checkForNativeMethods(function() {
        _.identity(1);
      });

      it("should exist", function() {
        expect(_.identity).to.exist;
      });
      it("it should return the same data type as the argument", function() {
        expect(_.identity("Kevin")).to.be.a("string");
      });
      it("should return the argument if it's a number", function() {
        expect(_.identity(1)).to.equal(1);
      });
      it("should return the argument if it's a string", function() {
        expect(_.identity("Kevin")).to.equal("Kevin");
      });
      it("should return the argument if it's an array", function() {
        expect(_.identity([1, 2, 3])).to.deep.equal([1, 2, 3]);
      });
      it("should return the argument if it's an object", function() {
        expect(_.identity({ name: "Kevin" })).to.deep.equal({ name: "Kevin" });
      });
      it("should return the argument if it's a falsy value", function() {
        expect(_.identity(null)).to.be.null;
      });
      it("should return the argument if it's a function", function() {
        let argumentAsAFunction = function(num) {
          return num * 2;
        };
        expect(_.identity(argumentAsAFunction)).to.be.a("function");
      });
      it('returns a boolean value', function(){
        expect(_.identity(false)).to.equal(false);
      });

      it('returns a number if its a number', function(){
        expect(_.identity(5)).to.equal(5);
      });

      it('true to not be false', function(){
        expect(_.identity(true)).to.be.true;
      });

      it('returns null if null', function(){
        expect(_.identity(null)).to.equal(null);
      });

      it('returns a symbol if its a symbol', function(){
        expect(_.identity('$')).to.equal('$');
      });

      it('returns an array of many values', function(){
        expect(_.identity([{}, 'false', 1, null])).to.deep.equal([{}, 'false', 1, null]);
      });

      it('returns the same type of value of the input', function(){
        var func = function(x){return x+1};
        expect(typeof(_.identity(func))).to.equal('function');
      });
    });

    describe("first", function() {
      checkForNativeMethods(function() {
        _.first([1, 2, 3]);
      });
      var simpleArrayTo5;
      var simpleArrayTo3;

      beforeEach(function() {
        simpleArrayTo5 = [1, 2, 3, 4, 5];
        simpleArrayTo3 = [1, 2, 3];
      });
      it('should output be first element of input (array)', function() {
        expect(_.first(simpleArrayTo3)).to.equal(1);
      });

      it('should output first 3 elements of input (array)', function() {
        expect(_.first(simpleArrayTo5, 3)).to.deep.equal(simpleArrayTo3);
      });

      it('should check the length of the output, which depends on the parameter set by the second argument', function() {
        var expectedResult = 3;
        var actualResult = _.first(simpleArrayTo5, 3).length;
        expect(expectedResult).to.equal(actualResult);
      });

      it('if second argument is invalid, output should be empty array', function() {
        expect(_.first(simpleArrayTo5, -3)).to.be.an('array').that.is.empty;
        expect(_.first(simpleArrayTo5, {})).to.eql([]);
        expect(_.first(simpleArrayTo5, {'second argument': 3})).to.eql([]);
        expect(_.first(simpleArrayTo5, 0)).to.eql([]);
      });

      it('if second argument is greater than length of input array, output should be the same input array', function() {
        expect(_.first(simpleArrayTo5, 8)).to.deep.equal(simpleArrayTo5);
      });

      // it('should find that the standard syntax of _.first is equal to an alternate syntax', function() {
      //   expect(_.first(simpleArrayTo5, 3)).to.deep.equal(_(simpleArrayTo5).first(3));
      // });

      it('if input is incorrect (null, empty array or undefined), output should be undefined', function() {
        expect(_.first(null)).to.be.undefined;
        expect(_.first(undefined)).to.be.undefined;
        expect(_.first([])).to.be.undefined;
      });
      it("should be able to pull out the first element of an array", function() {
        expect(_.first([1, 2, 3])).to.equal(1);
      });

      it("should accept an index argument", function() {
        expect(_.first([1, 2, 3], 2)).to.eql([1, 2]);
      });

      it("should return empty array if zero is passed in as the index", function() {
        expect(_.first([1, 2, 3], 0)).to.eql([]);
      });

      it("should return all the array's elements if the index argument is larger than the length of the array", function() {
        expect(_.first([1, 2, 3], 5)).to.eql([1, 2, 3]);
      });
    });

    describe("last", function() {
      checkForNativeMethods(function() {
        _.last([1, 2, 3]);
      });
      let array = [2, 4, 23, 2322];
      let arrayObjs = [{ c: 3 }, { b: 2 }, { a: 1 }];
      let emptyArray = [];

      it("should exist", function() {
        expect(_.last).to.exist;
      });

      it('should return a value', function() {
        const numbers = [5, 4, 3, 2, 1, 2, 3, 4];

        expect(_.last(numbers)).to.be.a('number');
      });

      it('should return the last element of an array if no argument is given', function() {
        const numbers = [5, 4, 3, 2, 2, 4, 1];

        expect(_.last(numbers)).to.equal(1);
      });

      it('should return all the values in an array from the nth index (exclusive) to last index', function() {
        const numbers = [10, 4, 3, 2, 2, 2, 2, 1];

        expect(_.last(numbers, 2)).to.deep.equal([2, 1]);
      });

      it('should return entire array if n is larger than given array', function() {
        const numbers = [5, 4, 3, 2, 1];

        expect(_.last(numbers, 6)).to.deep.equal([5, 4, 3, 2, 1]);
      });

      it('should return empty array if n is a negative number', function() {
        const numbers = [5, 4, 3, 2, 1, 3, 2, 1, 3, 4];

        expect(_.last(numbers, -1)).to.deep.equal([]);
      });

      it('should return single value if array has single value', function() {
        const numbers = [1];

        expect(_.last(numbers)).to.deep.equal(1);
      });

      it('should return empty array if n is a zero', function() {
        const numbers = [5, 4, 3, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4];

        expect(_.last(numbers, 0)).to.deep.equal([]);
      });

      it("should expect the last element of array to be returned", function() {
        expect(_.last(array)).to.equal(2322);
      });
      it("should expect last n elements of array to form a new array", function() {
        expect(_.last(array, 2)).to.deep.equal([23, 2322]);
      });
      it("should expect the last object of array to be returned", function() {
        expect(_.last(arrayObjs)).to.equal(arrayObjs[2]);
      });
      it("should expect an array of the last n objects to be returned", function() {
        expect(_.last(arrayObjs, 2)).to.deep.equal([arrayObjs[1], arrayObjs[2]]);
      });
      it("should expect undefined if array is empty", function() {
        expect(_.last(emptyArray)).to.equal(undefined);
      });
      it("should return original array if 2nd parameter is >= to array length", function() {
        expect(_.last(array, 4)).to.deep.equal(array);
      });
      it("should return array of same length as n", function() {
        expect(_.last(array, 3)).to.have.lengthOf(3);
      });
      it("should pull the last element from an array", function() {
        expect(_.last([1, 2, 3])).to.equal(3);
      });

      it("should accept an index argument", function() {
        expect(_.last([1, 2, 3], 2)).to.eql([2, 3]);
      });

      it("should return empty array if zero is passed in as the index", function() {
        expect(_.last([1, 2, 3], 0)).to.eql([]);
      });

      it("should return all the array's elements if the index argument is larger than the length of the array", function() {
        expect(_.last([1, 2, 3], 5)).to.eql([1, 2, 3]);
      });
    });

    describe("each", function() {
      let arr, expectedValue, actualValue;
      beforeEach(function() {
        arr = [1,3,3,4,5];
        expectedValue = [1,3,3,4,5];
        actualValue = _.each(arr, function(x){return x + 1});
      });
      checkForNativeMethods(function() {
        _.each([1, 2, 3, 4], function(number) {});
      });
      it('should expect _.each to iterate over each array element and apply the input function', function() {
        var names = ['Dave', 'John'];
        var namesFromAllIndices = [];

        _.each(names, function(name){
          namesFromAllIndices.push(name);
        });

        expect(namesFromAllIndices).to.deep.equal(['Dave', 'John']);
      });

      it('should expect each to iterate over each object[key] and apply input function', function() {
        var firstAndLastName= {firstName: 'Carlos', lastName: 'Nieves'};
        var checkObjectKeyValues = [];
        _.each(firstAndLastName, function(obj, key) {
          checkObjectKeyValues.push(firstAndLastName[key])
        });
        expect(checkObjectKeyValues).to.deep.equal(['Carlos', 'Nieves']);
      });

      it('should expect _.each to have access to each element and index', function() {
        var names = ['Tom', 'Jerry'];
        var elementsAndIndices = [[], []]
        _.each(names, function(element, index){
          elementsAndIndices[0].push(element);
          elementsAndIndices[1].push(index);
        });
        expect(elementsAndIndices).to.deep.equal([['Tom', 'Jerry'], [0, 1]]);
      });

      it('should expect iteratee to take list as argument', function() {
        var arr = [1,2,3];
        var list = _.each(arr, function(element, index, list) {
          return list;
        });
        expect(list).to.equal(arr);
      });

      it("should return output length and input length", function() {
        expect(expectedValue.length).to.equal(actualValue.length);
      });

      it("should return list for chaining", function() {
        expect(JSON.stringify(expectedValue)).to.equal(JSON.stringify(actualValue));
      });

      it("should not modify the original input", function() {
        _.each(arr, function(x) {
          return x + 1;
        });
        expect(JSON.stringify(expectedValue)).to.equal(JSON.stringify(arr));
      });

      it("should be able get access of the element and index", function() {
        let words = ["one", "two"];
        let elementAndIndex = [[], []];

        _.each(words, function(element, index) {
          elementAndIndex[0].push(element);
          elementAndIndex[1].push(index);
        });
        expect(elementAndIndex).to.deep.equal([["one", "two"], [0, 1]]);
      });

      it("should be a function", function() {
        expect(_.each).to.be.an.instanceOf(Function);
      });


      it("should not mutate the input array", function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.each(input, function(item) {
          /* noop */
        });

        /*
         * Mutation of inputs should be avoided without good justification otherwise
         * as it can often lead to hard to find bugs and confusing code!
         * Imagine we were reading the code above, and we added the following line:
         *
         * var lastElement = input[input.length - 1];
         *
         * Without knowing that mutation occured inside of each,
         * we would assume that `lastElement` is 5. But if inside of
         * each, we use the array method `pop`, we would permanently
         * change `input` and our assumption would not longer be true,
         * `lastElement` would be 4 instead!
         *
         * The tricky part is that we have no way of knowing about the mutation
         * just by looking at the code above. We'd have to dive into the
         * implementation of each to the exact line that uses `pop`.
         * If we write a lot of code with this assumption, it might be very hard
         * to trace back to the correct line in each.
         *
         * You can avoid an entire class of bugs by writing functions
         * that don't mutate their inputs!
         */

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it(" should iterate over arrays and provide access to each value", function() {
        var letters = ["a", "b", "c"];
        var iterations = [];

        _.each(letters, function(letter) {
          iterations.push(letter);
        });

        expect(iterations).to.eql(["a", "b", "c"]);
      });

      it("should iterate over arrays and provide access to each index", function() {
        var letters = ["a", "b", "c"];
        var iterations = [];

        _.each(letters, function(letter, index) {
          iterations.push([letter, index]);
        });

        expect(iterations).to.eql([["a", 0], ["b", 1], ["c", 2]]);
      });

      it("should iterate over arrays and provide access to the original collection", function() {
        var letters = ["a", "b", "c"];
        var iterations = [];

        _.each(letters, function(letter, index, collection) {
          iterations.push([letter, index, collection]);
        });

        expect(iterations).to.eql([["a", 0, letters], ["b", 1, letters], ["c", 2, letters]]);
      });

      it("should only iterate over numeric keys of an array, not all properties", function() {
        var iterations = [];
        var letters = ["a", "b", "c"];
        letters.someProperty = "Do not iterate over me!";

        _.each(letters, function(letter, index, collection) {
          iterations.push(letter);
        });

        expect(iterations).to.not.include("Do not iterate over me!");
      });

      it("should iterate over objects and provide access to each value", function() {
        var letters = { d: "dog", e: "elephant", f: "flotsam" };
        var iterations = [];

        _.each(letters, function(value) {
          iterations.push(value);
        });

        expect(iterations).to.eql(["dog", "elephant", "flotsam"]);
      });

      it("should iterate over objects and provide access to each key", function() {
        var letters = { d: "dog", e: "elephant", f: "flotsam" };
        var iterations = [];

        _.each(letters, function(value, property) {
          iterations.push([value, property]);
        });

        expect(iterations).to.eql([["dog", "d"], ["elephant", "e"], ["flotsam", "f"]]);
      });

      it("should iterate over objects and provide access to the original object", function() {
        var letters = { d: "dog", e: "elephant", f: "flotsam" };
        var iterations = [];

        _.each(letters, function(value, property, object) {
          iterations.push([value, property, object]);
        });

        expect(iterations).to.eql([["dog", "d", letters], ["elephant", "e", letters], ["flotsam", "f", letters]]);
      });

    });

    describe("indexOf", function() {
      checkForNativeMethods(function() {
        _.indexOf([10, 20, 30, 40], 40);
      });
      it("should return a specifed index of an element", function() {
        expect(_.indexOf([1, 2, "two", [4, 5], true, 2, 3, 1, "two"], "two")).to.equal(2);
      });

      it("should return the index associated with the first instance of an array element", function() {
        expect(_.indexOf([12, 23, 22, 52, 23, 19], 23)).to.equal(1);
      });

      it("should return a number", function() {
        expect(_.indexOf(["tabby", "siamese", "persian", "mainecoon", "calico"], 2)).to.be.a("number");
      });

      it("should return -1 if the element is not found", function() {
        expect(_.indexOf([true, "ren", "stimpy", 20, "rocket power"], "spongebob")).to.equal(-1);
      });

      it("should return index of the element at or after given index in third parameter", function() {
        expect(_.indexOf([0, 2, 5, 2], 2, 1)).to.equal(1);
        expect(_.indexOf([0, "four", 4, undefined, 0], 0, 3)).to.equal(4);
      });

      it("should return -1 if the index given in third parameter does not exist", function() {
        expect(_.indexOf(["pepsi", "fanta", "sprite", "coke"], "coke", 10)).to.equal(-1);
      });

      it("should find 40 in the list", function() {
        var numbers = [10, 20, 30, 40, 50];

        expect(_.indexOf(numbers, 40)).to.equal(3);
      });

      it("should be able to compute indexOf even when the native function is undefined", function() {
        var numbers = [10, 20, 30];

        expect(_.indexOf(numbers, 20)).to.equal(1);
      });

      it("returns -1 when the target cannot be found not in the list", function() {
        var numbers = [10, 20, 30, 40, 50];

        expect(_.indexOf(numbers, 35)).to.equal(-1);
      });

      it("returns the first index that the target can be found at when there are multiple matches", function() {
        var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

        expect(_.indexOf(numbers, 40)).to.equal(1);
      });
    });

    describe("findIndex", function() {
      let isGreaterThanTen = function(num) {return num > 10;};
      let isLessThanFive = function(num) {return num < 5;};

      it('should exist', function() {
        expect(_.findIndex).to.exist;
      });
      it('should return -1 if no items pass predicate test', function() {
        expect(_.findIndex([1, 2, 3, 4, 5, 6], isGreaterThanTen)).to.equal(-1);
        expect(_.findIndex([11, 12, 13, 14, 15, 16], isLessThanFive)).to.equal(-1);
      });
      it('should return index of first value that passes predicate test', function() {
        expect(_.findIndex([8, 9, 10, 11, 12, 13], isGreaterThanTen)).to.equal(3);
        expect(_.findIndex([1, 2, 3, 4, 5, 6], isLessThanFive)).to.equal(0);
      });
      it('should return index of first value that passes predicate test', function() {
        let doubleNum = function(num) {return num * 2;};
        expect(_.findIndex([8, [9, 10], 'apple', false, 11, doubleNum(15)], isGreaterThanTen)).to.equal(4);
        expect(_.findIndex([8, [9, 10], 'apple', false, 4, doubleNum(15)], isLessThanFive)).to.equal(3);
      });

      it("should find the index of prime number(s)", function() {
        var numbers = [4, 6, 7, 8, 9];
        var prime = function(value) {
          for (var i = 2; i < value; i++) {
            if (value % i === 0) {
              return false;
            }
          }
          return value > 1;
        };
        expect(_.findIndex(numbers, prime)).to.eql(2);
      });

      it("should return -1 if no prime numbers exist", function() {
        var numbers = [4, 6, 8, 10, 12];
        var prime = function(value) {
          for (var i = 2; i < value; i++) {
            if (value % i === 0) {
              return false;
            }
          }
          return value > 1;
        };

        expect(_.findIndex(numbers, prime)).to.eql(-1);
      });
      it("should return the index of the first element in an array", function() {
        var numbers = [4, 6, 8, 10, 12];

        expect(_.findIndex(numbers)).to.eql(0);
      });
    });

    describe("filter", function() {
      checkForNativeMethods(function() {
        var isEven = function(num) {
          return num % 2 === 0;
        };
        _.filter([1, 2, 3, 4], isEven);
      });

      it('should exist', function() {
        expect(_.filter).to.exist;
      });

      it("should return a new array that passes a conditional statement", function() {
        var numbers = [1,2,3,4];
        expect(_.filter(numbers, function(num) {return num % 2 === 0;})).to.deep.equal([2,4]);
      });

      it("should handle strings", function() {
        var words = ["anthony", "peter"];
        expect(_.filter(words, function(s) {return s !== "peter";})).to.deep.equal(["anthony"]);
      });

      it("should return all numbers divisible by 3", function() {
        var factors = function(num) { return num % 3 === 0; };
        var result = _.filter([1,2,3,12,24,100, 90], factors);

        expect(result).to.deep.equal([3, 12, 24, 90]);
      });

      it("should return an array of values from an object", function() {
        var animals = {dog: "furry", cat: "fuzzy"};
        expect(_.filter(animals)).to.deep.equal(["furry", "fuzzy"]);
      });

      xit("should return a split array of the string and not mutate the original", function() {
        var helloVar = "hello";
        var filterHello = _.filter("hello");

        expect(helloVar).to.equal("hello");
        expect(_.filter(filterHello)).to.deep.equal([ 'h', 'e', 'l', 'l', 'o' ]);
      });



      it('should return an array', function() {
        expect(_.filter([])).to.be.an.instanceOf(Array);
      });

      it('should return an array of elements that pass truth test', function() {
        var isEven = function(num){
          return num % 2 === 0;
        }
        expect(_.filter([1,2,3,4,5], isEven)).to.eql([2,4]);
      });
      it('should return an empty array if no elements pass truth test', function() {
        var isEven = function(num){
          return num % 2 === 0;
        }
        expect(_.filter([1,3,5], isEven)).to.eql([]);
      });

      it('should not mutate the input array', function() {
        var isEven = function(num){
          return num % 2 === 0;
        }
        var input = [1,2,3,4,5];
        var actual = _.filter(input,isEven);

        expect(input).to.eql([1,2,3,4,5]);
      });


      it("should return all even numbers in an array", function() {
        var isEven = function(num) {
          return num % 2 === 0;
        };
        var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);

        expect(evens).to.eql([2, 4, 6]);
      });

      it("should return all odd numbers in an array", function() {
        var isOdd = function(num) {
          return num % 2 !== 0;
        };
        var odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);

        expect(odds).to.eql([1, 3, 5]);
      });

      it("should produce a brand new array instead of modifying the input array", function() {
        var isOdd = function(num) {
          return num % 2 !== 0;
        };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.filter(numbers, isOdd);

        expect(evens).to.not.equal(numbers);
      });
    });

    describe("reject", function() {
      checkForNativeMethods(function() {
        var isEven = function(num) {
          return num % 2 === 0;
        };
        _.reject([1, 2, 3, 4, 5, 6], isEven);
      });

      var original = [1,2,3,4]
      var array = [];
      var expected = [];
      var obj = {'apple': 1, 'banana': 2, 'pear': 3}
      var objTwo = {'apple': 2, 'banana': 4, 'pear': 6}
      var isEven = function(num) { return num % 2 === 0; };
      var randomData = function() {
        var test = []
        for (var i = 0; i < Math.random()*1000; i++) {
          test.push(Math.floor(Math.random()*1000));
        }
        return test;
      }

      before(function() {
        array = randomData();

        for (var i = 0; i < array.length; i++) {
          if (!isEven(array[i])) {
            expected.push(array[i]);
          }
        }
      });


      it('should return a new array with only elements that fail the predicate', function() {
        expect(_.reject(array, isEven)).to.deep.equal(expected);
      });

      it('should return an empty array if no elements pass the predicate', function() {
        expect(_.reject([2,4,6,8], isEven)).to.deep.equal([]);
      });

      it('should return a new array with only properties that pass the predicate', function() {
        expect(_.reject(obj, isEven)).to.deep.equal([1,3]);
      });

      it('should return an empty array if no properties pass the predicate', function() {
        expect(_.reject(objTwo, isEven)).to.deep.equal([]);
      });

      it('should not mutate the original argument', function() {
        _.reject(original, isEven);
        expect(original).to.deep.equal([1,2,3,4]);
      });

      it("should reject all even numbers", function() {
        var isEven = function(num) {
          return num % 2 === 0;
        };
        var odds = _.reject([1, 2, 3, 4, 5, 6], isEven);

        expect(odds).to.eql([1, 3, 5]);
      });

      it("should reject all odd numbers", function() {
        var isOdd = function(num) {
          return num % 2 !== 0;
        };
        var evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);

        expect(evens).to.eql([2, 4, 6]);
      });

      it("should produce a brand new array instead of modifying the input array", function() {
        var isOdd = function(num) {
          return num % 2 !== 0;
        };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.reject(numbers, isOdd);

        expect(evens).to.not.equal(numbers);
      });
    });

    describe("uniq", function() {
      it("should exist", function() {
        expect(_.uniq).to.exist;
      });

      //it should not mutate the original array
      it("it should not mutate the original array", function() {
        let arr1 = [1, 2, 3, 4, 5, 5];
        _.uniq(arr1);
        expect(arr1).to.deep.equal([1, 2, 3, 4, 5, 5]);
      });

      //if the list is empty, then return an empty array
      it("if the list is empty, then return an empty array", function() {
        expect(_.uniq([])).to.deep.equal([]);
      });

      //it should return an array with no duplicate values
      it("it should return an array with no duplicate values", function() {
        expect(_.uniq([1, 1, 2, 3, 4, 5, 6, 6, 7])).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
      });

      //it should compute much faster if isSorted is set to true
      it("it should not return a sorted list if isSorted is set to false", function() {
        let sorted = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4];
        let unSorted = [4, 3, 1, 1, 2, 3, 1, 2, 2, 3];

        expect(_.uniq(sorted, true)).to.not.deep.equal(_.uniq(unSorted, false));
      });

      //it should give a unique list of items based on our iteratee function
      it("it should give a unique list of items based on our iteratee function", function() {
        let mySorted = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4];
        let myIter = function(value) {
          return value === 3;
        };

        expect(_.uniq(mySorted, myIter)).to.deep.equal([1, 3]);
      });

      //it should expect our result to be an array
      it("it should expect our result to be an array", function() {
        expect(Array.isArray(_.uniq([1, 1, 2, 3, 4, 5, 6, 6, 7]))).to.deep.equal(true);
      });
    });

    describe("map", function() {
      checkForNativeMethods(function() {
        _.map([1, 2, 3, 4], function(num) {
          return num * 2;
        });
      });

      it("should not mutate the input array", function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.map(input, function(num) {
          /* noop */
        });

        /*
         * Mutation of inputs should be avoided without good justification otherwise
         * as it can often lead to hard to find bugs and confusing code!
         * Imagine we were reading the code above, and we added the following line:
         *
         * var lastElement = input[input.length - 1];
         *
         * Without knowing that mutation occured inside of map,
         * we would assume that `lastElement` is 5. But if inside of
         * map, we use the array method `pop`, we would permanently
         * change `input` and our assumption would not longer be true,
         * `lastElement` would be 4 instead!
         *
         * The tricky part is that we have no way of knowing about the mutation
         * just by looking at the code above. We'd have to dive into the
         * implementation of map to the exact line that uses `pop`.
         * If we write a lot of code with this assumption, it might be very hard
         * to trace back to the correct line in map.
         *
         * You can avoid an entire class of bugs by writing functions
         * that don't mutate their inputs!
         */

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it("should apply a function to every value in an array", function() {
        var doubledNumbers = _.map([1, 2, 3], function(num) {
          return num * 2;
        });

        expect(doubledNumbers).to.eql([2, 4, 6]);
      });

      it("should produce a brand new array instead of modifying the input array", function() {
        var numbers = [1, 2, 3];
        var mappedNumbers = _.map(numbers, function(num) {
          return num;
        });

        expect(mappedNumbers).to.not.equal(numbers);
      });
    });

    describe("pluck", function() {
      checkForNativeMethods(function() {
        var people = [{ name: "moe", age: 30 }, { name: "curly", age: 50 }];

        _.pluck(people, "name");
      });

      var listEmployees = [];

      beforeEach(function () {
        listEmployees = [{'name': 'Jean', 'age':32},{'name': 'Luc', 'age':26},{'name':'Gabie','age':'21'}];
      });


      it('should return an array if given an object array', function () {
        var personName = _.pluck(listEmployees, 'name');

        expect(personName).to.be.an('array');
      });

      it('should not mutate the input array', function() {
        var numbers = [1,2,3,4,5];
        var result = _.pluck(numbers, function(num){return num+1;});

        expect(numbers).to.eql([1,2,3,4,5])
      });

      it('should return the values of the passed key', function(){
        var personName = _.pluck(listEmployees, 'name');
        expect(personName).to.eql(['Jean', 'Luc', 'Gabie']);
      });

      it('should return the values of the passed key', function(){
        var personName = _.pluck(listEmployees, 'name');
        expect(personName).to.eql(['Jean', 'Luc', 'Gabie']);
      });

      it('should return values if given an array with mixed data types', function() {
        var mixedArray = [{name:'Joseph'}, 1,2,{name:'Gabie'}]
        var result = _.pluck(mixedArray, 'name')

        expect(result).to.eql(['Joseph',undefined,undefined,'Gabie']);
      });

      it('should return an array of undefined if passed an empty object array', function() {
        var EmptyArrayObject = [{}];
        var resultUndefined = _.pluck(EmptyArrayObject, 'name')

        expect(resultUndefined).to.eql([undefined]);
      });


      it('should return an array of undefined elements if given an empty property argument', function() {
        expect(_.pluck(listEmployees)).to.eql([undefined, undefined, undefined]);
      });

      it("should return values contained at a user-defined property", function() {
        var people = [{ name: "moe", age: 30 }, { name: "curly", age: 50 }];

        expect(_.pluck(people, "name")).to.eql(["moe", "curly"]);
      });

      it("should not modify the original array", function() {
        var people = [{ name: "moe", age: 30 }, { name: "curly", age: 50 }];

        _.pluck(people, "name");

        expect(people).to.eql([{ name: "moe", age: 30 }, { name: "curly", age: 50 }]);
      });

      const stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];

      it('should exist', function() {
        expect(_.pluck).to.exist;
      });

      it('should return an array if given an object array', function () {
        const stoogeNames= _.pluck(stooges, 'name');

        expect(stoogeNames).to.be.an('array');
      });

      it('should return all property values if given an object array and valid property name', function() {
        const stoogeNames= _.pluck(stooges, 'name');

        expect(stoogeNames).to.eql(['moe', 'larry', 'curly']);
      });

      it('should not mutate the original object array', function() {
        const stoogeNames= _.pluck(stooges, 'name');

        expect(stooges).to.eql(stooges);
      });

      it('should return an empty array if passed an empty array', function() {
        const emptyArr = [];
        const emptyPluck = _.pluck(emptyArr, 'name');

        expect(emptyPluck).to.eql([]);
      });

      it('should return an array of undefined if passed an empty object array', function() {
        const emptyObjArr = [{}];
        const emptyPluck = _.pluck(emptyObjArr, 'name');

        expect(emptyPluck).to.eql([undefined]);
      });

      it('should return an array of undefined if passed an array of empty objects', function() {
        const emptyArrOfObjs = [{}, {}, {}];
        const emptyPluck = _.pluck(emptyArrOfObjs, 'name');

        expect(emptyPluck).to.eql([undefined, undefined, undefined]);
      });

      it('should return an array of undefined if given an empty property argument', function() {
        expect(_.pluck(stooges)).to.eql([undefined, undefined, undefined]);
      });
    });

    describe("reduce", function() {
      checkForNativeMethods(function() {
        var add = function(tally, item) {
          return tally + item;
        };
        _.reduce([1, 2, 3, 4], add);
      });

      it("should be a function", function() {
        expect(_.reduce).to.be.an.instanceOf(Function);
      });

      it('should return undefined if input is an empty array', function() {
        expect(_.reduce([], function(memo, num) {return memo + num})).to.be.undefined;
      });

      it('should iterate from left to right', function() {
        var message = ['hi', 'my', 'name', 'is'];
        expect(_.reduce(message, function(memo, string) {return memo.concat(string + ' ')})).to.deep.equal('himy name is ');
      });

      it('should not mutate input', function() {
        var nums = [10, 20, 30, 40, 50, 60, 70];
        _.reduce(nums, function(memo, num) {return memo + num});
        expect(nums).to.deep.equal([10, 20, 30, 40, 50, 60, 70]);
      });

      it('can return sum', function() {
        var nums = [1, 2, 3, 4, 5, 6];
        expect(_.reduce(nums, function(memo, num) {return memo + num})).to.deep.equal(21);
      });

      it('can reduce using multiplication', function() {
        var nums = [1, 2, 3];
        expect(_.reduce(nums, function(memo, num) {return memo * num})).to.deep.equal(6);
      });

      it('can return sum even if additional starting value is provided', function() {
        var nums = [1, 2, 3, 4];
        expect(_.reduce(nums, function(memo, num) {return memo + num}, 10)).to.deep.equal(20);
      });

      it('should return correct value even if input is list of strings', function() {
        var message = ['hi', 'my', 'name', 'is', 'slim', 'shady'];
        expect(_.reduce(message, function(memo, string) {return memo.concat(string)})).to.deep.equal('himynameisslimshady');
      });

      it('can reduce when given an object as input', function() {
        var housemate = {name: 'Mabel', age: 24};
        expect(_.reduce(housemate, function(memo, num) {return memo + num})).to.deep.equal('Mabel24');
      });


      it("should return a value", function() {
        var result = _.reduce([3, 2, 1], function(memo, item) {
          return item;
        });
        expect(result).to.be.defined;
      });

      it("should not mutate the input array", function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.reduce(input, function(memo, item) {
          return item;
        });

        /*
         * Mutation of inputs should be avoided without good justification otherwise
         * as it can often lead to hard to find bugs and confusing code!
         * Imagine we were reading the code above, and we added the following line:
         *
         * var lastElement = input[input.length - 1];
         *
         * Without knowing that mutation occured inside of _.reduce,
         * we would assume that `lastElement` is 5. But if inside of
         * _.reduce, we use the array method `pop`, we would permanently
         * change `input` and our assumption would not longer be true,
         * `lastElement` would be 4 instead!
         *
         * The tricky part is that we have no way of knowing about the mutation
         * just by looking at the code above. We'd have to dive into the
         * implementation of _.reduce to the exact line that uses `pop`.
         * If we write a lot of code with this assumption, it might be very hard
         * to trace back to the correct line in _.reduce.
         *
         * You can avoid an entire class of bugs by writing functions
         * that don't mutate their inputs!
         */

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it("should invoke the iterator function with arguments (memo, item) in that order", function() {
        var memoInCallback, itemInCallback;

        _.reduce(
          ["item"],
          function(memo, item) {
            memoInCallback = memo;
            itemInCallback = item;
          },
          "memo"
        );

        expect(memoInCallback).to.equal("memo");
        expect(itemInCallback).to.equal("item");
      });

      it("should pass items of the array into the iterator from left to right", function() {
        var orderTraversed = [];

        _.reduce(
          [1, 2, 3, 4],
          function(memo, item) {
            orderTraversed.push(item);
            return memo;
          },
          10
        );

        expect(orderTraversed).to.eql([1, 2, 3, 4]);
      });

      it("should continue to call iterator even if the iterator returns undefined", function() {
        var callCount = 0;
        var returnFalsy = function(total, item) {
          callCount++;
          if (callCount === 1) {
            return undefined;
          } else {
            return item + 1;
          }
        };

        var total = _.reduce([1, 1, 2], returnFalsy);
        expect(total).to.equal(3);
      });

      it("should pass every item of the array into the iterator if a memo is passed in", function() {
        var result = _.reduce(
          [1, 2, 3],
          function(memo, item) {
            return memo - item;
          },
          10
        );

        expect(result).to.equal(4);
      });

      it("should accept falsy values as a valid memo", function() {
        // Be careful how you check if a memo has been passed in
        var result = _.reduce(
          [1, 2, 3],
          function(memo, item) {
            return memo * item;
          },
          0
        );

        expect(result).to.equal(0);
      });

      it("should set memo to be the first item of the array if no memo is passed in", function() {
        var result = _.reduce([1, 2, 3], function(memo) {
          return memo;
        });

        expect(result).to.equal(1);
      });

      it("should pass the second item of the array into the iterator first if a memo is not passed in", function() {
        var result = _.reduce([3, 2, 1], function(memo, item) {
          return memo - item;
        });

        expect(result).to.equal(0);
      });
    });
  });

  function checkForNativeMethods(runUnderbarFunction) {
    it("should not use the native version of any underbar methods in its implementation", function() {
      // These spies are set up in testSupport.js
      runUnderbarFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
    });
  }
})();
