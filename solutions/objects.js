describe('should be able to add properties to an object', () => {
    let o = {}
    // add name using dot notation
    o.name = 'Batman'
    o['age'] = 42
    // add age using bracket notation
    it('should give the correct object', () => {
        expect(o.name).toEqual('Batman')
        expect(o.age).toEqual(42)
    })
})

describe('should be able to remove properties from an object', () => {
    let o = {
        name: 'Shirley' // dont directly change this
    }
    delete o.name
    it('should give the correct object', () => {
        expect(o.name).toEqual(undefined)
    })
})

describe('should be able to modify properties from an object', () => {
    let o = {
        weight: 130, // dont directly change this
        age: 22, // dont directly change this
        name: 'Shirley'
    }
    o.age = 23
    o.weight = 129
    it('should give the correct object', () => {
        expect(o.age).toEqual(23)
        expect(o.weight).toEqual(129)
    })
})