describe('should be able to get values from primitives', () => {
    let str = 'hello'
    let str2 = 'bye'
    let strCount = str.length
    let str2Count = str2.length
    it('should get character count of strings', () => {
        expect(strCount).toEqual(5)
        expect(str2Count).toEqual(3)
    })

    let lastStrIndex = str.length - 1
    let lastStr2Index = str2.length - 1
    it('it should get the last index of a string', () => {
        expect(lastStrIndex).toEqual(4)
        expect(lastStr2Index).toEqual(2)
    })

    let strLast = str.charAt(str.length - 1)
    let str2Last = str2.charAt(str2.length - 1)
    it('it should get the last letter of a string', () => {
        expect(strLast).toEqual('o')
        expect(str2Last).toEqual('e')
    })
})