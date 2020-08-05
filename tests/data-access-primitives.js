describe('should be able to get values from primitives', () => {
    let str = 'hello'
    let str2 = 'bye'
    let strCount
    let str2Count
    it('should get character count of strings', () => {
        expect(strCount).toEqual(5)
        expect(str2Count).toEqual(3)
    })

    let lastStrIndex
    let lastStr2Index
    it('it should get the last index of a string', () => {
        expect(lastStrIndex).toEqual(4)
        expect(lastStr2Index).toEqual(2)
    })

    let strLast
    let str2Last
    it('it should get the last letter of a string', () => {
        expect(strLast).toEqual('o')
        expect(str2Last).toEqual('e')
    })
})