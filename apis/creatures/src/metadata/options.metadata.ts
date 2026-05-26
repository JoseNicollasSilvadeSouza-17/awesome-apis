const creaturesMetadata = {
  description: "Creatures management",

  routes: {
    "/": {
      GET: {
        summary: "List all creatures",
      },
      POST: {
        summary: "Create an creature",
      },
    },

    "/download": {
      GET: {
        summary: "Download all creatures in JSON format",
      },
    },

    "/count": {
      GET: {
        summary: "Returns the number of creatures",
      },
    },

    "/:id": {
      GET: {
        summary: "Return an creature",
      },
      PUT: {
        summary: "Completely update an creature",
      },
      PATCH: {
        summary: "Partially update an creature",
      },
      DELETE: {
        summary: "Delete an creature",
      },
    },

    "/:id/download": {
      GET: {
        summary: "Download an creature in JSON format",
      },
    },
  },
};

export default creaturesMetadata;
