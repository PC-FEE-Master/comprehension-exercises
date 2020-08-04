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
        expect(strLast).toEqual(4)
        expect(str2Last).toEqual(3)
    })

    let strLast
    let str2Last
    it('it should get the last letter of a string', () => {
        expect(strLast).toEqual('o')
        expect(str2Last).toEqual('e')
    })
})

describe('should be able to get/delete/modify values from objects', () => {
    let person = {
        first: 'John',
        last: 'Smith',
        ssn: '555-55-5555',
        age: 22 // don't change this directly
    }
    let first
    let last
    let full
    it('should access person properly', () => {
        expect(first).toEqual('John')
        expect(last).toEqual('Smith')
        expect(full).toEqual('John Smith')
        expect(person.ssn).toEqual(undefined)
        expect(person.age).toEqual(23)
    })
})