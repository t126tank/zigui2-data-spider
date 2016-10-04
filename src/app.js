import cheerio from 'cheerio'
import download from './download'

const url = 'http://info.finance.yahoo.co.jp/fx/list/'

download(url, data => {
  if (data) {
    const $ = cheerio.load(data)
    const test = $('table.fxERCTbl').html()
    console.log(test)
  } else {
    console.error('no data')
  }
})
