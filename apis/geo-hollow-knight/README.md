# Geo Hollow Knight Converter API

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)

**Geo Hollow Knight Converter API** is a RESTful service that converts Geo, the fictional currency of Hollow Knight, into USD and BRL, utilizing a custom exchange rate derived from in-game and real-world commodity valuation.

## Exchange Rate Methodology

The exchange rate is determined through a purchasing power parity (PPP) model, benchmarking the in-game price of a Rancid Egg (90 Geo) against its real-world equivalent, the Chinese Century Egg (valued at USD 1.99). This establishes a baseline conversion rate of approximately 1 Geo = USD 0.0221. Real-to-Brazilian Real (BRL) conversions are processed using standard fiat market rates.

## Useful Links

- Video where I used the idea: [Quanto vale um GEO na VIDA REAL? | Hollow Knight](https://www.youtube.com/watch?v=gqZXSNgpVfo)

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit) - see the [LICENSE](./LICENSE) file for details.