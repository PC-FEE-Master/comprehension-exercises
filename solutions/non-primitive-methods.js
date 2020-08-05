describe('should be able to look inside arrays', () => {
    let arr = [2]
    let arr2 = [1,2,3]
    let containsTwo
    let notIncludesThree
    let arrItemCount
    let arr2ItemCount
    it('should check inside array', () => {
        expect(containsTwo).toEqual(true)
        expect(notIncludesThree).toEqual(true)
    })
    it('should get correct array item counts', () => {
        expect(arrItemCount).toEqual(1)
        expect(arr2ItemCount).toEqual(3)
    })
})