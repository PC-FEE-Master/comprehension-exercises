describe('should be able to compare primitives', () => {
  const five = 5
  const six = 6
  let sixGreaterThanFive
  // if statement here...
  if (six > five) {
      sixGreaterThanFive = true
  }
  it('sixGreaterThanFive should be true', () => {
    expect(sixGreaterThanFive).toEqual(true)	
  })
  let sixLessThanSeven
  // if statement here...
  if (six < 7) {
      sixLessThanSeven = true
  }
  it('sixLessThanSeven should be true', () => {
    expect(sixLessThanSeven).toEqual(true)	
  })
  let fiveEquals5
  // if statement here...
  if (five == 5) {
      fiveEquals5 = true
  }
  it('fiveEquals5 should be true', () => {
    expect(fiveEquals5).toEqual(true)	
  })

  let sixDoesNotEqual5
  // if statement here...
  if (six !== five) {
      sixDoesNotEqual5 = true
  }
  it('sixDoesNotEqual5 should be true', () => {
    expect(sixDoesNotEqual5).toEqual(true)	
  })

  const str = 'Hello'
  let isHello
  // if statement here...
  if (str == 'Hello') {
      isHello = true
  }
  it('isHello should be true', () => {
    expect(isHello).toEqual(true)
  })
})

describe('should be able to compare object values', () => {
  let arr = []
  let isEmpty
  // if statement here
  if (arr.length == 0) {
    isEmpty = true
  }

  let isNotEmpty
  // if statement here
  if (arr.length == 0) {
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
  if (arr2.length > 0) {
    notEmpty = true
  }
  it('isNotEmpty should be false', () => {
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
  if (obj.age > 20) {
    olderThan20 = true
  }
  if (obj.name == 'John') {
    isJohn = true
  }
  it('isJohn should be true', () => {
      expect(isJohn).toEqual(true)
  })
  it('olderThan20 should be true', () => {
    expect(olderThan20).toEqual(true)
  })
})