describe('should be able to look inside arrays', () => {
    let arr = [2]
    let arr2 = [1,2,3]
    let containsTwo = arr.includes(2)
    let notIncludesThree = !arr.includes(3)
    it('should check inside array', () => {
        expect(notIncludesThree).toEqual(true)
    })
    it('should check inside array', () => {
        expect(notIncludesThree).toEqual(true)
    })
})