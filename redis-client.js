// redis-client.js
const redis = require('redis')
const {promisify} = require('util')

let redisUrl = process.env.REDIS_URL || "redis://localhost:6379"
const client = redis.createClient(redisUrl)

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client)
};