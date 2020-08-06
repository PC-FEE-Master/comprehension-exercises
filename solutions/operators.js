describe('should increment by 1', () => {
    let count = 0
    count++
	it('should increment count by 1', () => {
		expect(count).toEqual(1)	
	})
})

describe('should decrement count by 1', () => {
    let count = 1
    count--
	it('should increment by 1', () => {
		expect(count).toEqual(0)
	})
})

describe('left over pizza should be two', () => {
	let pizzaSlices = 8
	let people = 3
	// use pizzaSlices and people for leftover
	let leftover = pizzaSlices % people
	it('should equal 3', () => {
		expect(leftover).toEqual(2)	
	})
})

describe('compare values', () => {
	let pizzaSlices = 8
	// if there is 8 slices have fullPizza be true
	let fullPizza = pizzaSlices === 8
	let badPizza = 7
	// if the badPizza is not 8 slices, completePizza is false
	let completePizza = badPizza == 8
	// if the badPizza is at least 6 slices have enoughPizza be true
	let enoughPizza = badPizza >= 6
	
	let num = 4
	// using num variable - set numNotFive to true if num is 4
	let numNotFive = num == 4
	let numIsFour = num == 4
	let four = '4'
	// using four variable set kindaFour to be true
	let kindaFour = four == 4
	it('fullPizza should be true', () => {
		expect(fullPizza).toEqual(true)	
	})
	it('completePizza should be false', () => {
		expect(completePizza).toEqual(false)
	})
	it('enoughPizza should be false', () => {
		expect(enoughPizza).toEqual(true)
	})
	it('numNotFive should be false', () => {
		expect(numNotFive).toEqual(true)
	})
	it('numIsFour should be true', () => {
		expect(numIsFour).toEqual(true)
	})
	it('kindaFour should be true', () => {
		expect(kindaFour).toEqual(true)
	})
})

describe('should change greet to Hello, John', () => {
	// dont directly change the line below
    let greet = 'Hello'
    greet = greet + ', John'
	it('should have greet be Hello, John', () => {
		expect(greet).toEqual('Hello, John')
	})
})

describe('should give the type of variable', () => {
    let greet = typeof 'Hello'
    let obj = typeof {}
    let num = typeof 5
	it('greet should be string', () => {
        expect(greet).toEqual('string')
	})
	it('obj should be object', () => {
        expect(obj).toEqual('object')
	})
	it('num should be number', () => {
        expect(num).toEqual('number')
	})
})

describe('should be able to convert to boolean values using not', () => {
	let str = ''
	let emptyStr = !str
	let str2 = 'yo'
	let notEmptyStr = !str2
	it('emptyStr should be true', () => {
        expect(emptyStr).toEqual(true)
	})
	it('notEmptyStr should be true', () => {
        expect(notEmptyStr).toEqual(false)
	})
})