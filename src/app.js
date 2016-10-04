import saveData from './saveData'
import stock from './crawlers/stock'
import fx from './crawlers/fx'

// example 1
stock().then(result => saveData('stock', result))

// example 2
fx().then(result => saveData('fx', result))

// add others crawlers 