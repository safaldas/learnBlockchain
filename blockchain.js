const Block = require('./block')

class BlockChain {
  constructor() {
    this.chain = [new Block(0, new Date(), 'THE GENESIS BLOCK', 0)]
  }

  //get the hash of the last block
  getLastHash() {
    return this.chain[this.chain.length - 1].hash
  }

  //Add a new block to the chain
  addBlock(data) {
    const index = this.chain.length
    const timestamp = new Date().toUTCString()
    const previousHash = this.getLastHash()
    const newBlock = new Block(index, timestamp, data, previousHash)

    if (this.isValidBlock(newBlock)) {
      this.chain.push(newBlock)
    } else {
      console.error("The block is invalid and cannot be added.")
    }
  }
}
module.exports = BlockChain
