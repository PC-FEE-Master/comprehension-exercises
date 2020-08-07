// destructuring (arrays and objects)
// rest operator
// spread operator
describe('should know destructuring of objects', () => {
    const person = {name: 'John', age: 55, skills: ['archery']}
    const {name, age, skills} = person
    it('should destructure person name', () => {
        expect(name).toEqual('John')
    })
    it('should destructure person age', () => {
        expect(age).toEqual(55)
    })
    it('should destructure person skills', () => {
        expect(skills).toEqual(['archery'])
    })
})

describe('should know destructuring of arrays', () => {
    const inventory = ['longsword', 'apple', 'bow and arrow']
    const [sword, food, bow] = inventory
    it('should be a longsword', () => {
        expect(sword).toEqual('longsword')
    })
    it('should be a apple', () => {
        expect(food).toEqual('apple')
    })
    it('should be a bow and arrow', () => {
        expect(bow).toEqual('bow and arrow')
    })
})