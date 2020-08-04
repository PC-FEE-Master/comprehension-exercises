// different ways to write a function

/*
    https://markdown-flashcard.surge.sh/js/8?back=true
*/


describe('should have functions work: =>', () => {
    // ---------------------
    // Define a function max() that takes two numbers as 
    // arguments and returns the largest of them. Use the 
    // if-then-else construct available in JavaScript.
    // ---------------------

    it('should compute max', () => {
        expect(max(2,3)).toEqual(3)
        expect(max(23,24)).toEqual(24)
        expect(max(-23, 12)).toEqual(12)
    })

    // ---------------------
    // Define a function maxOfThree() that takes three 
    // numbers as arguments and returns the largest of them.
    // ---------------------

    it('should compute max of three', () => {
        expect(maxOfThree(2,56,3)).toEqual(56)
        expect(maxOfThree(12,3,4)).toEqual(12)
        expect(maxOfThree(-12,4,-5)).toEqual(4)
    })

    // ---------------------
    // Write a function isVowel() that takes a character (i.e. a 
    // string of length 1) and returns true if it is a 
    // vowel, false otherwise.
    // ---------------------

    it('should check if vowel', () => {
        expect(isVowel(0)).toEqual(false)
        expect(isVowel("B")).toEqual(false)
        expect(isVowel("b")).toEqual(false)
        expect(isVowel("a")).toEqual(true)
        expect(isVowel("E")).toEqual(true)
        expect(isVowel("2")).toEqual(false)
    })

    // ---------------------
    // Write a function rovarspraket() that will translate 
    // a text into "Rovarspraket". That is, double every 
    // consonant and place an occurrence of "o" in between. 
    // For example, translate("this is fun") should return 
    // the string "tothohisos isos fofunon".
    // ---------------------

    it('should be rovarspraket', () => {
        expect(rovarspraket("a")).toEqual("a")
        expect(rovarspraket("b")).toEqual("bob")
        expect(rovarspraket("cat")).toEqual("cocatot")
        expect(rovarspraket("javascript")).toEqual("jojavovasoscocroripoptot")
        expect(rovarspraket(0)).toEqual("0")
    })


    // ---------------------
    // Define a function reverse() that computes the reversal 
    // of a string. For example, reverse("jag testar") should 
    // return the string "ratset gaj".
    // ---------------------

    it('should reverse', () => {
        expect(reverse("books")).toEqual("skoob")
        expect(reverse("we don't want no trouble")).toEqual("elbuort on tnaw t'nod ew")
    })
})