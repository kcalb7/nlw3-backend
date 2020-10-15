import express from "express";

import "./database/connection";

const app = express();

app.use(express.json());

app.get("/:name", (req, res) => {
	console.log("hello world");
	res.json({
		msg: "hello world",
		query: req.query,
		params: req.params,
		body: req.body,
	});
});

app.listen(3333);
