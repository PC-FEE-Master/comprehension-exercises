describe('Accessing Primitives', () => {
    let str = 'hello'
    let str2 = 'bye'
    let strCount
    let str2Count
    it('should get character count of str', () => {
        expect(strCount).toEqual(5)
    })

    it('should get character count of str2', () => {
        expect(str2Count).toEqual(3)
    })

    let lastStrIndex
    let lastStr2Index
    it('it should get the last index of a str', () => {
        expect(lastStrIndex).toEqual(4)
    })

    it('it should get the last index of a str2', () => {
        expect(lastStr2Index).toEqual(2)
    })

    let strLast
    let str2Last
    it('it should get the last letter of a strLast', () => {
        expect(strLast).toEqual('o')
    })
    it('it should get the last letter of a str2Last', () => {
        expect(str2Last).toEqual('e')
    })
})