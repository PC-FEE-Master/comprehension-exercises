describe('should be able to use array methods with primitives', () => {
    // add the number 7 to the array below without directly adding it :)
    const arr = [1,2,3,4,5,6]
    // find out if the the array contains the number 2
    const containsTwo = null
    // find out if the array doesn't contain the number 7
    const doesntContainSeven = null
    // only keep items in the array above 3
    const aboveThree = null
    // if the array contains the number 2 store that
    const two = null
    // multiply every number in array by two 
    const multiplied = null
    it('should have seven on arr', () => {
        expect(arr).toEqual([1,2,3,4,5,6,7])
    })
    it('length should be 7', () => {
        expect(arr.length).toEqual(7)
    })
    it('containsTwo is true', () => {
        expect(containsTwo).toEqual(true)
    })
    it('doesntContainSeven is false', () => {
        expect(doesntContainSeven).toEqual(false)
    })
    it('aboveThree', () => {
        expect(aboveThree).toEqual([4,5,6])
    })
    it('two', () => {
        expect(two).toEqual(2)
    })
    it('multiplied', () => {
        expect(multiplied).toEqual([2,4,6,8,10,12,14])
    })
})

describe('should be able to use array methods with objects', () => {
    const arr = [
        {
            name: 'Jon Snow',
            catchphrase: 'I dont want it.',
            gold: 22
        },
        {
            name: 'Cersei Lannister',
            catchphrase: 'I am a bad mofo',
            gold: 55
        },
        {
            name: 'Night King',
            catchphrase: undefined,
            gold: 23
        }
    ]
    const onlyNames = null
    const onlyKings = null
    const theRealKing = null
    const noTalkingRoles = null
    // use jons catchphrase
    const whoDoesntWantToBeKing = null
    const gold = null
    it('should output the correct values', () => {
        expect(onlyNames).toEqual(['Jon Snow', 'Cersei Lannister', 'Night King'])
    })
    it('should output the correct values', () => {
        expect(onlyKings).toEqual(['Night King'])
    })
    it('should output the correct values', () => {
        expect(theRealKing).toEqual('Night King')
    })
    it('should output the correct values', () => {
        expect(noTalkingRoles).toEqual('Night King')
    })
    it('should output the correct values', () => {
        expect(whoDoesntWantToBeKing).toEqual('Jon Snow')
    })
    it('should output the correct values', () => {
        expect(gold).toEqual(100)
    })

    const users = [
        {
            id: 1,
            first: 'mark',
            last: 'smith',
            age: 5,
            status: 'inactive'
        },
        {
            id: 2,
            first: 'mark',
            last: 'smitty',
            age: 51,
            status: 'active'
        },
        {
            id: 3,
            first: 'Rick',
            last: 'Sanchez',
            age: 75,
            status: 'inactive'
        },
        {
            id: 4,
            first: 'Morty',
            last: 'Smith',
            age: 14,
            status: 'active'
        }
    ]
    
    // find the user with id of 2
    const user2 = null
    it('should find user 2', () => {
        expect(user2).toEqual({
            id: 2,
            first: 'mark',
            last: 'smitty',
            age: 51,
            status: 'active'
        })
    })
    // find the user with the first name of Morty
    const morty = null
    it('should find morty', () => {
        expect(morty).toEqual({
            id: 4,
            first: 'Morty',
            last: 'Smith',
            age: 14,
            status: 'active'
        })
    })
    const marks = null
    it('should find all marks', () => {
        expect(marks).toEqual(
            [
                {
                    id: 1,
                    first: 'mark',
                    last: 'smith',
                    age: 5,
                    status: 'inactive'
                },
                {
                    id: 2,
                    first: 'mark',
                    last: 'smitty',
                    age: 51,
                    status: 'active'
                }
            ]
        )
    })
    
    // get every user named mark as an array
    
    // get a list of names (first and last) only as an array
    
    // make a copy of the array and add another user to it
    
    // get the total of all the ages of the people in users
    
    // sort this array by age (youngest to oldest) AKA ascending to descending
})