const Block = require('./block')

class BlockChain{
  constructor(){
    this.chain = [new Block(0,new Date(),'THE GENESIS BLOCK',0)]
  }
}
module.exports = BlockChain