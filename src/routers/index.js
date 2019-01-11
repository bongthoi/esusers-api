import express from 'express';

/** */
let router = express.Router();

/**public */
router.get("/", (req, res) => {
	res.json({"Project Name":"esusers-api"});
});


/**export */
module.exports = router;