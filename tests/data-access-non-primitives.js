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
    it('should access persons first name', () => {
        expect(first).toEqual('John')
    })
    it('should access persons last name', () => {
        expect(last).toEqual('Smith')
    })
    it('should access persons full name', () => {
        expect(full).toEqual('John Smith')
    })
    it('should not have a ssn', () => {
        expect(person.ssn).toEqual(undefined)
    })
    it('age should be 23', () => {
        expect(person.age).toEqual(23)
    })
})

describe('should be able access array item count', () => {
    let arr = [2]
    let arr2 = [1,2,3]
    let arrItemCount
    let arr2ItemCount
    it('should get correct item counts for arr', () => {
        expect(arrItemCount).toEqual(1)
    })
    it('should get correct item counts for arr2', () => {
        expect(arr2ItemCount).toEqual(3)
    })
})