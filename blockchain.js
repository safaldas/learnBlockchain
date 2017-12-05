const Block = require('./block')

class BlockChain{
  constructor(){
    this.chain = [new Block(0,new Date(),'THE GENESIS BLOCK',0)]
  }

  //get the hash of the last block
  getLastHash(){
    return this.chain[this.chain.length-1].hash
  }
}
module.exports = BlockChain