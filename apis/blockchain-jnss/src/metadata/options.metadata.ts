const blockchainMetadata = {
  description: "Using the JNSS Blockchain",

  routes: {
    "/": {
      GET: {
        summary: "List all datas JNSS Blockchain"
      },
      POST: {
        summary: "Build a mining"
      }
    },

    "/download": {
      GET: {
        summary: "Download all datas JNSS Blockchain in JSON format"
      }
    }
  }
};

export default blockchainMetadata;