const fetch = require('../js/fetchingData')
const sum = require('../js/sum')
// 1. testing function return string|number
const bestLaCroixFlavor = () => {
    return 'grapefruit'
}


//2. testing object: 

const can = {
    name: 'food',
    weight: 12
}

// 3. return array: 

const arrayReturn = (arr) => {
    return [...arr]
}
//4. to be called function that is argument inside function
function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
        callback(flavour);
    }
}


describe('testing 2', () => {
    test('the best flavor is grapefruit', () => {
        expect(bestLaCroixFlavor()).toBe('grapefruit');
    });
    test('the best flavor is grapefruit', () => {
        expect(bestLaCroixFlavor()).toBe('grapefruit');
    });

})
describe('object test', () => {
    test('object can key name', () => {
        expect(can.name).toBe('food')
    })
    test('object can key name', () => {
        expect(can.weight).toBe(12)
    })
})

describe('testing float sum function', () => {
    test('sum function plus 0.1 vs 0.2', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('return array checked', () => {
    const arrayCheck = [1, 2, 3]
    test('check weather arrayReturn can return array ?', () => {
        expect(arrayReturn(arrayCheck)).toEqual(arrayCheck)
    })
})
