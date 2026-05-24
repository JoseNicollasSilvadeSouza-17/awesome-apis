import Block from "./Block.class.js";

export default class Blockchain {
  private chain: Block[];

  constructor() {
    this.chain = [Block.poivre];
  }

  get lastBlock(): Block {
    return this.chain[this.chain.length - 1] as Block;
  }

  addBlock(data: string) {
    const previousBlock = this.lastBlock;

    const block = Block.mine(previousBlock, data);

    this.chain.push(block);

    return block;
  }

  getBlocks(): Block[] {
    return [...this.chain];
  }
}