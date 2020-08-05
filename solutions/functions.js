// different ways to write a function

/*
    https://markdown-flashcard.surge.sh/js/8?back=true
*/


describe('should have functions work: =>', () => {
    // Q1
    // Write a function called `sum` that takes two
    // parameters and returns the sum of those 2 numbers.

    function sum(num1, num2) {
        return num1 + num2
    }
    it('should have numbers match', () => {
        expect(sum(1,2)).toEqual(3)
        expect(sum(2,2)).toEqual(4)
        expect(sum(-2, -57)).toEqual(-59)
    })

    // Q2
    // Write a function named `avg` that takes 3 parameters
    // and returns the average of those 3 numbers.
    function avg(num1, num2, num3) {
        return (num1 + num2 + num3) / 3
    }
    it('should have avg', () => {
        expect(avg(2,3,4)).toEqual(3)
        expect(avg(234, 63, 234)).toEqual(177)
        expect(avg(123,234,345)).toEqual(234)
    })

    // Q3
    // Write a function called `getLength` that takes one
    // parameter (a string) and returns the length
    function getLength(str) {
        return str.length
    }
    it('should get length', () => {
        expect(getLength('Michael')).toEqual(7)
        expect(getLength('Javascript')).toEqual(10)
        expect(getLength('supercalifragilisticexpialidocious')).toEqual(34)
    })

    // Q4
    // Write a function called `greaterThan` that takes
    // two parameters and returns `true` if the first
    // parameter is greater than the second. Otherwise
    // the function should return `false`.
    function greaterThan(num1, num2) {
        return num1 > num2
    }
    it('should be greater than', () => {
        expect(greaterThan(2, 1)).toEqual(true)
        expect(greaterThan(23, 23)).toEqual(false)
        expect(greaterThan(-234, 1)).toEqual(false)
    })

    // Q5
    // Write a function called `greet` that takes a
    // single parameter and returns a string that
    // is formated like "Hello, Name!" where *Name*
    // is the parameter that was passed in.
    function greet(name) {
        return 'Hello, ' + name + '!'  // `Hello, ${name}` also works....
    }
    it('should greet', () => {
        expect(greet("Michael")).toEqual("Hello, Michael!")
        expect(greet("R2D2")).toEqual("Hello, R2D2!")
        expect(greet("Iron Man")).toEqual("Hello, Iron Man!")
    })

    // Q6
    // Write a function called `madlib` that takes
    // 4 or more parameters (words). The function 
    // should insert the words into a pre-defined
    // sentence. Finally the function should return
    // that sentence.
    // Note: When I say words and sentence I mean
    // strings. For example:
    // words: "quick", "fox", "fence"
    // sentence: "quick brown fox jumps over the fence"

    function madlib(word1, word2, word3, word4) {
        return `The ${word1} brown ${word2} ${word3} over the ${word4}.`
    }

    it('should madlib', () => {
        expect(madlib("quick","fox","jumps","fence")).toEqual("The quick brown fox jumps over the fence.")
        expect(madlib("fat","rabbit","hops","wall")).toEqual("The fat brown rabbit hops over the wall.")
    })


})