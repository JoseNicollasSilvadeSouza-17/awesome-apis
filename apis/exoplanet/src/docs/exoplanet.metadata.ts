const exoplanetMetadata = {
	description: "Exoplanet management",

	routes: {
		"/": {
			GET: {
				summary: "List all exoplanets",
			},
			POST: {
				summary: "Create an exoplanet",
			},
		},

		"/count": {
			GET: {
				summary: "Returns the number of exoplanets",
			},
		},

		"/download/json": {
			GET: {
				summary: "Download all exoplanets in JSON format",
			},
		},

		"/download/pdf": {
			GET: {
				summary: "Download all exoplanets in PDF format",
			},
		},

		"/:id": {
			GET: {
				summary: "Return an exoplanet",
			},
			PUT: {
				summary: "Completely update an exoplanet",
			},
			PATCH: {
				summary: "Partially update an exoplanet",
			},
			DELETE: {
				summary: "Delete an exoplanet",
			},
		},

		"/:id/download/json": {
			GET: {
				summary: "Download an exoplanet in JSON format",
			},
		},

		"/:id/download/pdf": {
			GET: {
				summary: "Download an exoplanet in PDF format",
			},
		},

		"/:id/image": {
			POST: {
				summary: "Image Upload",
			},
		},

		"/:id/model": {
			POST: {
				summary: "Model Upload",
			},
		},
	},
};

export default exoplanetMetadata;
