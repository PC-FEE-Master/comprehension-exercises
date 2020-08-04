describe('should be able to compare', () => {
    const five = 5
    const six = 6
    let greaterThanFive
    // if statement here...
	it('greaterThanFive should be true', () => {
		expect(greaterThanFive).toEqual(true)	
    })
    let lessThanSeven
    // if statement here...
	it('greater than five should be true', () => {
		expect(lessThanSeven).toEqual(true)	
    })
    let isFive
    // if statement here...
    it('isFive should be true', () => {
		expect(isFive).toEqual(true)	
    })

    let isNotFive
    // if statement here...
    it('isNotFive should be false', () => {
		expect(isNotFive).toEqual(false)
    })

    const str = 'Hello'
    let isHello
    // if statement here...
    it('isHello should be true', () => {
		expect(isHello).toEqual(true)
    })

    
})