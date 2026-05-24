import type IBlock from "../types/IBlock.js";
import CryptoJS from "crypto-js";

const MINE_RATE: number = 3000; // 3 s

export default class Block {
  private timestamp: number;
  private previousHash: string | undefined;
  private hash: string;
  private data: string;
  private nonce: number;
  private difficulty: number;

  constructor(blockData: IBlock) {
    this.timestamp = blockData.timestamp;
    this.previousHash = blockData.previousHash;
    this.hash = blockData.hash;
    this.data = blockData.data;
    this.nonce = blockData.nonce;
    this.difficulty = blockData.difficulty;
  }

  static get poivre() {
    const timestamp = new Date("2007-06-28").getTime();
    return new this({
      timestamp,
      previousHash: undefined,
      hash: "poivre_block",
      data: "Poivre Block",
      nonce: 0,
      difficulty: 3,
    });
  }

  static mine(previousBlock: Block, data: string): Block {
    const { hash: previousHash } = previousBlock;

    const timestampStart: number = Date.now();

    let difficulty: number =
      previousBlock.timestamp + MINE_RATE > timestampStart
        ? previousBlock.difficulty + 1
        : previousBlock.difficulty - 1;

    if (difficulty < 1) difficulty = 1;

    let timestamp: number;
    let hash: string;
    let nonce: number = 0;

    const target = "0".repeat(difficulty);

    do {
      timestamp = Date.now();
      nonce++;
      hash = CryptoJS.SHA256(
        previousHash + timestamp + data + nonce + difficulty,
      ).toString();
    } while (hash.substring(0, difficulty) !== target);

    return new this({ timestamp, previousHash, hash, data, nonce, difficulty });
  }

  toString() {
    const { timestamp, previousHash, hash, data, nonce, difficulty } = this;

    const stringFormat = `JNSS \n TimeStamp: ${timestamp} \n Previous Hash: ${previousHash} \n Hash: ${hash} \n Data: ${data} \n Nonce: ${nonce} \n Difficulty: ${difficulty}`;

    return stringFormat;
  }
}
