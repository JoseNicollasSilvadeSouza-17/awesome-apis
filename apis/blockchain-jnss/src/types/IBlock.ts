export default interface IBlock {
  timestamp: number;
  previousHash: string | undefined;
  hash: string;
  data: string;
  nonce: number;
  difficulty: number;
}