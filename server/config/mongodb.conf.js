const conf = {
  host: 'localhost',
  port: '37017',
  db: 'blog'
}
exports.options = {
  autoIndex: true, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
  // auth: {
  //   user: 'root',
  //   password: 'root1234'
  // }
};

const initUri = function ({
  host,
  port,
  db
}) {
  // mongodb://localhost:port/dbname
  return 'mongodb://' + host + ':' + port + '/' + db;
}

exports.url = initUri(conf)
