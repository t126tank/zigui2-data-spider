import saveData from './saveData'
import stock from './crawlers/stock'
import fx from './crawlers/fx'

console.log('test')
// example 1
stock().then(result => saveData('stock', result))

// example 2
fx().then(result => saveData('fx', result))

// add others crawlers 