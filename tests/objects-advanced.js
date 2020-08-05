const state = {
    todos: [
        {
            id: 1,
            text: 'todo 1',
            status: 'active'
        },
    ],
    products: [
        {
            id: 1,
            quantity: 2
        },
        {
            id: 2,
            quantity: 3
        }
    ]
}

// create a function which tells me if a key exists in the state
describe('create a function doesKeyExist which takes the state and determines if the key exists', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const doesKeyExist = (state, key) => {}
    expect(doesKeyExist(stateCopy, 'todos')).toEqual(true)
    expect(doesKeyExist(stateCopy, 'foo')).toEqual(false)
})
// create a function which copies an object and returns a copy of it with another key and value
describe('create a function copyAndAdd which takes an object and returns a copy of it with another key and value', () => {
    const obj = {test: true}
    const copyAndAdd = (o, key, value) => {}
    expect(copyAndAdd(obj, 'foo', 22)).toEqual({test: true, foo: 22})
    expect(copyAndAdd(obj, 'bar', true)).toEqual({test: true, bar: true})
})

// add a todo to this state (via mutation)
describe('should be able to add todos via mutation', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const todo = {
        id: 2,
        text: 'todo 2',
        status: 'active'
    }
    it('should give the correct object', () => {
        expect(stateCopy.todos).toEqual([
            {
                id: 1,
                text: 'todo 1',
                status: 'active'
            },
            {
                id: 2,
                text: 'todo 2',
                status: 'active'
            }
        ])
    })
})

// add a todo to this state via cloning and addition
describe('should be able to add todos via cloning', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const todo = {
        id: 2,
        text: 'todo 2',
        status: 'active'
    }
    it('should give the correct array', () => {
        expect(stateCopy.todos).toEqual([
            {
                id: 1,
                text: 'todo 1',
                status: 'active'
            },
            {
                id: 2,
                text: 'todo 2',
                status: 'active'
            }
        ])
    })
})

// give me the count of todos which have a status of active
describe('should give me the count of todos which have a status of active', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const totalCount = null
    it('should give the correct count', () => {
        expect(totalCount).toEqual(1)
    })
})

// create a function which toggles the todo status given the state and id of the todo
describe('create a function which toggles the todo status (either active or inactive) given the state and id of the todo', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const toggleTodoStatus = (state, id) => {}
    it('should give the correct new state', () => {
        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'todo 1',
                    status: 'inactive'
                },
            ],
            products: [
                {
                    id: 1,
                    quantity: 2
                },
                {
                    id: 2,
                    quantity: 3
                }
            ]
        }

        expect(toggleTodoStatus(stateCopy, 1)).toEqual(expectedState)
        expect(toggleTodoStatus(stateCopy, 1)).toEqual(stateCopy)
    })
})

// create a function which takes the state, id, key, and value which will update a todo
describe('create a function modifyTodo which takes the state, id, key, and value which will update a todo', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const modifyTodo = (state, id, key, value) => {}
    it('should give the correct new state w/ todo updated', () => {
        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'todo 1',
                    status: 'inactive'
                },
            ],
            products: [
                {
                    id: 1,
                    quantity: 2
                },
                {
                    id: 2,
                    quantity: 3
                }
            ]
        }

        expect(modifyTodo(stateCopy, 1, 'text', 'CHANGED THE STATE')).toEqual(expectedState)
    })
})

// create a function which takes the state and id and gives the state back without that todo
describe('create a function filterTodo which takes the state and id and gives the state back without that todo', () => {
    const stateCopy = {...state, todos: [...state.todos, {id: 2, text: 'todo 2', status: 'active'}]}
    const filterTodo = (state, id) => {}
    it('should give the correct new state w/ todo updated', () => {
        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'CHANGED THE STATE',
                    status: 'inactive'
                },
            ],
            products: [
                {
                    id: 1,
                    quantity: 2
                },
                {
                    id: 2,
                    quantity: 3
                }
            ]
        }

        expect(modifyTodo(stateCopy, 2)).toEqual(expectedState)
    })
})

// create a function which increments the quantity of the product given an id (returning a copy of the entire product state)
describe('create a function increaseQuantity which increases the  of the product given an id (returning a copy of the entire product state)', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const increaseQuantity = (state, id) => {}
    it('should give the correct new state w/ product quantity increased', () => {
        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'CHANGED THE STATE',
                    status: 'inactive'
                },
            ],
            products: [
                {
                    id: 1,
                    quantity: 2
                },
                {
                    id: 2,
                    quantity: 4 // notice quantity for id 2 has increased to 4 starting at 3
                }
            ]
        }

        expect(modifyTodo(stateCopy, 2)).toEqual(expectedState)
    })
})

// create a function which decrements the quantity of the product given an id (returning a copy of the entire product state)
describe('create a function decreaseQuantity which increases the  of the product given an id (returning a copy of the entire product state)', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const decreaseQuantity = (state, id) => {}
    it('should give the correct new state w/ product decreased', () => {
        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'CHANGED THE STATE',
                    status: 'inactive'
                },
            ],
            products: [
                {
                    id: 1,
                    quantity: 2
                },
                {
                    id: 2,
                    quantity: 2 // notice quantity for id 2 has decreased to 2 starting at 3
                }
            ]
        }

        expect(decreaseQuantity(stateCopy, 2)).toEqual(expectedState)
    })
})

// create a function which increments/decrements the quantity of the product given an id (returning a copy of the entire product state)
// and a boolean value (true means increment, false means decrement)
describe('create a function incrementOrDecrement which increases the of the product given an id (returning a copy of the entire product state)', () => {
    const stateCopy = {...state, todos: [...state.todos]}
    const incrementOrDecrement = (state, id, increment) => {}
    it('should give the correct new state w/ product incremented or decremented', () => {
        const expectedIncrementState = {
            todos: [
                {
                    id: 1,
                    text: 'CHANGED THE STATE',
                    status: 'inactive'
                },
            ],
            products: [
                {
                    id: 1,
                    quantity: 2
                },
                {
                    id: 2,
                    quantity: 4 // notice quantity for id 2 has increased to 4 starting at 3
                }
            ]
        }

        const expectedDecrementState = {...expectedIncrementState, products: [{id: 1, quantity: 2}, {id: 2, quantity: 2}]}

        expect(incrementOrDecrement(stateCopy, 2, true)).toEqual(expectedIncrementState)
        expect(incrementOrDecrement(stateCopy, 2, false)).toEqual(expectedDecrementState)
    })
})