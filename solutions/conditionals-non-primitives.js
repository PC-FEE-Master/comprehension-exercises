describe('should be able to compare object values', () => {
    let arr = []
    let isEmpty
    // if statement here
    if (arr.length == 0) {
        isEmpty = true
    }

    let isNotEmpty
    // if statement here
    if (arr.length > 0) {
        isNotEmpty = true
    } else {
        isNotEmpty = false
    }
    it('isEmpty should be true', () => {
        expect(isEmpty).toEqual(true)
    })
    it('isNotEmpty should be false', () => {
        expect(isNotEmpty).toEqual(false)
    })
    let arr2 = [1]
    let notEmpty
    // if statement here
    if (arr2.length) {
        notEmpty = true
    }
    it('notEmpty should be false', () => {
        expect(notEmpty).toEqual(true)
    })

    let arr3 = [1,2,3,4]
    let containsAtLeast2
    if (arr3.length >= 2) {
        containsAtLeast2 = true
    }
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
    if (obj.name == 'John') {
        isJohn = true
    }
    if (obj.age > 20) {
        olderThan20 = true
    }
    it('isJohn should be true', () => {
        expect(isJohn).toEqual(true)
        expect(olderThan20).toEqual(true)
    })
})