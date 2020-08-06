describe('should be able to compare object values', () => {
    let arr = []
    let isEmpty
    // if statement here
  
    let isNotEmpty
    // if statement here
    it('isEmpty should be true', () => {
        expect(isEmpty).toEqual(true)
    })
    it('isNotEmpty should be false', () => {
        expect(isNotEmpty).toEqual(false)
    })
    let arr2 = [1]
    let notEmpty
    // if statement here
    it('isNotEmpty should be false', () => {
        expect(notEmpty).toEqual(true)
    })
  
    let arr3 = [1,2,3,4]
    let containsAtLeast2
    it('containsAtLeast2 should be true', () => {
        expect(containsAtLeast2).toEqual(true)
    })
  
    const obj = {
        name: 'John',
        age: 21
    }
    let isJohn
    let olderThan20
    // if statement here
    it('isJohn should be true', () => {
        expect(isJohn).toEqual(true)
    })
    it('olderThan20 should be true', () => {
      expect(olderThan20).toEqual(true)
    })
  })