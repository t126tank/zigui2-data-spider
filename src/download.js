import http from 'http'

export default function(url, callback) {
  http.get(url, res => {
    var data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      callback(data);
    });
  }).on('error', (err) => console.log(err))
}