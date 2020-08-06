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