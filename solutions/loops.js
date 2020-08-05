describe('should be able to create an array of numbers [1,2,3,4,5]', () => {
    let numbers = []
    // for loop here

    for (let i = 1; i <= 5; i++) {
        numbers.push(i)
    }

    it('should have numbers match', () => {
        expect(numbers).toEqual([1,2,3,4,5])
    })
})

describe('should be able to sum numbers', () => {
    let arr = [1,2,3]
    let count = 0
    // for loop here
    for (let i = 0; i < arr.length; i++) {
        count = count + arr[i]
    }
    
    let addAllNumbersUpTo5 = 0
    // for loop starting at 1 and adding every number up to 5 (1 + 2 + 3 + 4 + 5) // 15
    for (let i = 1; i <= 5; i++) {
        addAllNumbersUpTo5 += i
    }
    it('should sum numbers from different values', () => {
        expect(count).toEqual(6)
        expect(addAllNumbersUpTo5).toEqual(15)
    })
})

describe('should be able to add strings', () => {
    let creditCard = '5555 5555 5555 5555'
    // 'xxxx xxxx xxxx xxxx xxxx'
    let card = ''
    // using a for loop have card equal the commented line above it
    for (let i = 0; i < creditCard.length; i++) {
        const char = creditCard.charAt(i)
        if (char === ' ') {
            card += ' '
        } else {
            card += 'x'
        }
    }
    
    it('should sum numbers from different values', () => {
        expect(card).toEqual('xxxx xxxx xxxx xxxx')
    })
})

describe('should be able to reverse a string', () => {
    let str = 'hello'
    let newStr = ''
    // for loop here - can't use string.split('').reverse('').join('') :)
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i)
    }
    it('should reverse the string', () => {
        expect(newStr).toEqual('olleh')
    })
})

/*
    advanced loop exercise
*/

describe('should be able to collect an array and make a object of letter counts', () => {
    let arr = ['a', 'b', 'c', 'c']
    let o = {}
    // for loop here
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i]
        if (o[letter]) {
            o[letter]++
        } else {
            o[letter] = 1
        }
    }
    it('should give the correct count', () => {
        expect(o).toEqual({a: 1, b: 1, c: 2})
    })
})

// TODO: additional looping like for in....