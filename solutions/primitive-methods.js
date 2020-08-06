describe('should be able to get values from primitives', () => {
    let str = 'hello'
    let str2 = 'bye'

    let strFirst = str.charAt(0)
    let str2First = str2.charAt(0)
    it('it should get first letter of a string', () => {
        expect(strFirst).toEqual('h')
    })
    it('it should get first letter of a string', () => {
        expect(str2First).toEqual('b')
    })

    let strLast = str.charAt(str.length - 1)
    let str2Last = str2.charAt(str2.length - 1)
    it('it should get the last letter of a string', () => {
        expect(strLast).toEqual('o')
        expect(str2Last).toEqual('e')
    })

    let strIncludesH = str.includes('h')
    let str2IncludesX = str2.includes('x')
    it('it should see if string includes a character', () => {
        expect(strIncludesH).toEqual(true)
    })
    it('it should see if string includes a character', () => {
        expect(str2IncludesX).toEqual(false)
    })
})

describe('should be able to transform primitives', () => {
    let greet = 'hello'
    let loud = 'HELLO'
    let greetLoud = greet.toUpperCase()
    let greetQuiet = loud.toLowerCase()
    let num = 5
    let numString = num.toString()
    // NOTE: base backToNum variable based on the result on numString above
    let backToNum = Number(numString)
    let greetArr = greet.split('')
    // NOTE: base backToString variable based on the result on greetArr above
    let backToString = greetArr.join('')
    it('should be transformed values', () => {
        expect(greetLoud).toEqual('HELLO')
    })
    it('should be transformed values', () => {
        expect(greetQuiet).toEqual('hello')
    })
    it('should be transformed values', () => {
        expect(numString).toEqual('5')
    })
    it('should be transformed values', () => {
        expect(backToNum).toEqual(5)
    })
    it('should be transformed values', () => {
        expect(greetArr).toEqual(['h', 'e', 'l', 'l', 'o'])
    })
})