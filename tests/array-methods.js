describe('should be able to use array methods with primitives', () => {
    // add the number 7 to the array below without directly adding it :)
    const arr = [1,2,3,4,5,6]
    // find out if the the array contains the number 2
    const containsTwo
    // find out if the array doesn't contain the number 7
    const doesntContainSeven
    // only keep items in the array above 3
    const aboveThree
    // if the array contains the number 2 store that
    const two
    // multiply every number in array by two 
    const multiplied
    it('should have seven on arr', () => {
        expect(arr).toEqual([1,2,3,4,5,6,7])
        expect(arr.length).toEqual(7)
        expect(containsTwo).toEqual(true)
        expect(doesntContainSeven).toEqual(false)
        expect(aboveThree).toEqual([4,5,6])
        expect(two).toEqual(2)
        expect(multiplied).toEqual([2,4,6,8,10,12])
    })
})

describe('should be able to use array methods with objects', () => {
    const arr = [
        {
            name: 'John Snow',
            catchphrase: 'I dont want it.',
            gold: 22
        },
        {
            name: 'Cescei Lannister',
            catchphrase: 'I am a bad mofo',
            gold: 55
        },
        {
            name: 'Night King',
            catchphrase: undefined,
            gold: 23
        }
    ]
    const onlyNames
    const onlyKings
    const theRealKing
    const noTalkingRoles
    const whoDoesntWantToBeKing
    const gold
    it('should output the correct values', () => {
        expect(onlyNames).toEqual(['John Snow', 'Cescei Lannister', 'Night King'])
        expect(onlyKings).toEqual(['Night King'])
        expect(theRealKing).toEqual('Night King')
        expect(noTalkingRoles).toEqual(['Night King'])
        expect(whoDoesntWantToBeKing).toEqual('John Snow')
        expect(gold).toEqual(100)
    })
})