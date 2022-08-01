const { shuffleArray } = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('returns array w/ shuffled items', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7]
        let result = shuffleArray(arr)
        expect(result.join()).not.toEqual(arr.join())
    })

    test('returns same length array', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7]
        let result = shuffleArray(arr)
        expect(result.length).toEqual(arr.length)
    })
})