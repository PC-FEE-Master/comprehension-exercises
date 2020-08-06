describe('should be able to use array methods with primitives', () => {
    // add the number 7 to the array below without directly adding it :)
    const arr = [1,2,3,4,5,6]
    arr.push(7)
    // find out if the the array contains the number 2
    const containsTwo = arr.includes(2)
    // find out if the array doesn't contain the number 7
    const doesntContainSeven = !arr.includes(7)
    // only keep items in the array above 3
    const aboveThree = arr.filter(x => x > 3)
    // if the array contains the number 2 store that
    const two = arr.find(x => x === 2)
    // multiply every number in array by two 
    const multiplied = arr.map(item => item * 2)
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
    const whoDoesntWantToBeKing = null
    const gold = null
    it('should output the correct values', () => {
        expect(onlyNames).toEqual(['Jon Snow', 'Cescei Lannister', 'Night King'])
        expect(onlyKings).toEqual(['Night King'])
        expect(theRealKing).toEqual('Night King')
        expect(noTalkingRoles).toEqual(['Night King'])
        expect(whoDoesntWantToBeKing).toEqual('Jon Snow')
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