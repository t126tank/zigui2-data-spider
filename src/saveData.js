import redis from 'redis'

// const client = redis.createClient()

export default (key, data) => {
  // TODO set data
  // client.on("error", function (err) {
  //   console.log("Error " + err);
  // });

  // client.set("string key", "string val", redis.print);
  // client.hset("hash key", "hashtest 1", "some value", redis.print);
  // client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
  // client.hkeys("hash key", function (err, replies) {
  //   console.log(replies.length + " replies:");
  //   replies.forEach(function (reply, i) {
  //       console.log("    " + i + ": " + reply);
  //   });
  //   client.quit();
  // });
  const tmp = JSON.stringify(data, null, '  ')
  console.log(`save to redis: 
  key: ${key} , 
  data:  ${tmp}`)
}