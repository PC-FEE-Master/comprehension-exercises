describe('should be able to get values from primitives', () => {
    let str = 'hello'
    let str2 = 'bye'
    let strCount
    let str2Count
    it('should get character count of strings', () => {
        expect(strCount).toEqual(5)
        expect(str2Count).toEqual(3)
    })
    let strFirst
    let str2First
    it('it should get first letter of a string', () => {
        expect(strFirst).toEqual('h')
        expect(str2First).toEqual('b')
    })

    let lastStrIndex
    let lastStr2Index
    it('it should get the last index of a string', () => {
        expect(strLast).toEqual(4)
        expect(str2Last).toEqual(3)
    })

    let strLast
    let str2Last
    it('it should get the last letter of a string', () => {
        expect(strLast).toEqual('o')
        expect(str2Last).toEqual('e')
    })

    let strIncludesH
    let str2IncludesX
    it('it should see if string includes a character', () => {
        expect(strIncludesH).toEqual(true)
        expect(str2IncludesX).toEqual(false)
    })
})

describe('should be able to look inside objects', () => {
    let arr = [2]
    let arr2 = [1,2,3]
    let containsTwo
    let notIncludesThree
    let arrItemCount
    let arr2ItemCount
    it('should check inside array', () => {
        expect(containsTwo).toEqual(true)
        expect(notIncludesThree).toEqual(true)
    })
    it('should get correct array item counts', () => {
        expect(arrItemCount).toEqual(1)
        expect(arr2ItemCount).toEqual(3)
    })
})