const crypto = require('crypto') //this is in the default node implementation

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
  }

  // creating the hash for the block
  calculateHash() {
    const string = this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)
    return crypto.createHash('sha256').update('string').digest('hex')
  }
}

modules.exports = Block
