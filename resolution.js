coins =  [5, 7, 1, 1, 2, 3, 22]
coins1 = [1, 1, 1, 1, 1]
coins2 = [1, 5, 1, 1, 1, 10, 15, 20, 100]

const sumTotal = numbers => numbers.reduce((total,number)=>total+number,0)
const orderAsc = numbers => numbers.sort((a,b) => a-b)
// 1 - Non-Constructible Change
const amountOfChanges = (arrayOfCoins) => {
    const orderedCoins = orderAsc(arrayOfCoins);
    const combinations = orderedCoins.reduce((acc, coin) => {
      if (coin > acc) return acc;
      return acc + coin;
    }, 1);
  
    return combinations;
};
console.log(`[${coins}] result => ${amountOfChanges(coins)}`)
console.log(`[${coins1}] result => ${amountOfChanges(coins1)}`)
console.log(`[${coins2}] result => ${amountOfChanges(coins2)}`)

// 2 - Sorted Squared Array
arrayTest = [1, 2, 3, 5, 6, 8, 9]
arrayTest1 = [-2, -1]
arrayTest2 = [-10, -5, 0, 5, 10]

const squaredArray = numbers => orderAsc(numbers.map(number => Math.pow(number,2)))
console.log(`[${arrayTest}] result => [${squaredArray(arrayTest)}]`)
console.log(`[${arrayTest1}] result => [${squaredArray(arrayTest1)}]`)
console.log(`[${arrayTest2}] result => [${squaredArray(arrayTest2)}]`)
