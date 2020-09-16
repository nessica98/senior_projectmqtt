var mqtt = require('mqtt')

var client  = mqtt.connect('mqtt://192.168.56.101/test1')

client.on('connect', function () {
    console.log('connect')
    client.subscribe('test1/json', function (err) {
      if (!err) {
        client.publish('presence', 'Hello mqtt')
      }
    })
    client.subscribe('test2/json', function (err) {
      if (!err) {
        client.publish('presence', 'Hello mqtt')
      }
    })
    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      //console.log(JSON.parse(message.toString()))
      //client.end()
    })
})
