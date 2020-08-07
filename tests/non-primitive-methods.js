describe('should be able to look inside arrays', () => {
    let arr = [2]
    let arr2 = [1,2,3]
    let containsTwo
    let notIncludesThree
    it('should check inside array', () => {
        expect(containsTwo).toEqual(true)
    })
    it('should check inside array', () => {
        expect(notIncludesThree).toEqual(true)
    })
})