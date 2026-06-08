const geoMetadata = {
  description: "Convert the currency to GEO",

  routes: {
    "/geo": {
      GEO: {
        summary: "Convert or calculate GEO currency values",
        queryParams: {
          amount: {
            type: "number",
            required: true,
            description: "Amount of GEO currency to be processed"
          }
        }
      }
    },
    "/brl": {
      queryParams: {
        summary: "Convert Brazilian Real (BRL) to GEO currency",
        queryParams: {
          value: {
            type: "number",
            required: true,
            description: "The amount of BRL (Brazilian Real) to convert into GEO"
          }
        }
      }
    },
    "/usd": {
      queryParams: {
        summary: "Convert United States Dollar (USD) to GEO currency",
        queryParams: {
          value: {
            type: "number",
            required: true,
            description: "The amount of USD (United States Dollar) to convert into GEO"
          }
        }
      }
    }
  }
};

export default geoMetadata;