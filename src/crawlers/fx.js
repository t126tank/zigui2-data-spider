/**
 * js doc ...
 * this is not the right format . Just for a example
 */
import cheerio from 'cheerio'
import getContent from './../getContent'

const url = 'http://info.finance.yahoo.co.jp/fx/list/'

export default async function(){
  const result = {}
  try {
    const html = await getContent(url)
    const $ = cheerio.load(html)
    $('table.fxERCTbl').find('td').each((i, e) => {
      let $e = $(e)
      if ($e.html().length) {
        let cur = String($e.attr('id')).substring(0, 6)
        let arr = []
        $e.find('li').each((i, e) => {
          arr.push($(e).children('span').eq(1).text())
        })
        let [, Bid, Ask] = arr
        result[cur] = {
          Bid,
          Ask,
        }
      }
    })
  } catch (err) {
    console.error(err)
  }
  return result
}
