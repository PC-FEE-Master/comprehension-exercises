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