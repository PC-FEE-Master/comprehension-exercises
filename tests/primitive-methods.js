describe('should be able to get values from primitives', () => {
    let str = 'hello'
    let str2 = 'bye'

    let strFirst
    let str2First
    it('it should get first letter of a string', () => {
        expect(strFirst).toEqual('h')
    })
    it('it should get first letter of a string', () => {
        expect(str2First).toEqual('b')
    })

    let strLast
    let str2Last
    it('it should get the last letter of a string', () => {
        expect(strLast).toEqual('o')
    })
    it('it should get the last letter of a string', () => {
        expect(str2Last).toEqual('e')
    })

    let strIncludesH
    let str2IncludesX
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
    let greetLoud
    let greetQuiet
    let num = 5
    let numString
    // NOTE: base backToNum variable based on the result on numString above
    let backToNum
    let greetArr = greet.split('')
    // NOTE: base backToString variable based on the result on greetArr above
    let backToString
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