const BlockChain = require('./blockchain')

const mainChain = new BlockChain()

mainChain.addBlock("the second Block")
mainChain.addBlock("the third block")
mainChain.printChain()