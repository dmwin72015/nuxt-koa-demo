const conf = {
  host: 'localhost',
  port: '27107',
  db: 'chat'
}
exports.options = {
  autoIndex: true, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,

};

const initUri = function({ host, port, db }) {
  return 'mongodb://' + host + ':' + port + '/' + db;
}

exports.url = initUri(conf)
