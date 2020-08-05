// different ways to write a function

/*
    https://markdown-flashcard.surge.sh/js/8?back=true
*/


describe('should have functions work: =>', () => {
    // ---------------------
    // Define a function max() that takes two numbers as 
    // arguments and returns the largest of them. Use the 
    // if-then-else construct available in JavaScript.

    const max = (num1, num2) => {
        if (num1 > num2) {
            return num1
        } else {
            return num2
        }
    }
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

    function maxOfThree(num1, num2, num3) {
        if (num1 > num2 && num1 > num3) {
            return num1
        } else if (num2 > num1 && num2 > num3) {
            return num2
        } else {
            return num3
        }
    }

    it('should compute max of three', () => {
        expect(maxOfThree(2,56,3)).toEqual(56)
        expect(maxOfThree(12,3,4)).toEqual(12)
        expect(maxOfThree(-12,4,-5)).toEqual(4)
    })

    function isVowel(letter) {
        const vowels = 'aeiouyAEIOUY'
        if (typeof letter !== 'string') {
            return false
        }
        if (vowels.includes(letter)) {
            return true
        }
        return false
    }

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

    function rovarspraket(text) {
        let rovar = ''
        let vowels = 'aeiuoyAEIOUY'
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ'
        let sanitized = text.toString()
        for (let i = 0; i < sanitized.length; i++) {
            const char = sanitized.charAt(i)
            // could have also did !isVowel(char) // since that is a consonant
            if (vowels.includes(char)) {
                rovar += char
            } else {
                if (letters.includes(char)) {
                    rovar += char + 'o' + char
                } else {
                    rovar += char
                }
            }
        }
        return rovar
    }

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

    function reverse(str) {
        let newStr = ''
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str.charAt(i)
        }
        return newStr
    }

    it('should reverse', () => {
        expect(reverse("books")).toEqual("skoob")
        expect(reverse("we don't want no trouble")).toEqual("elbuort on tnaw t'nod ew")
    })
})