const router = require("express").Router();
const Member = require('../db/members');

module.exports = router;


//Get /api -goes to home page with form
router.get("/", async (req, res, next) => {
	res.json(["home page, form will go here"]);
});

//POST /api -Creates new member
router.post('/', async (req, res, next) => {
    try {
      let member = await Member.create(req.body)
      res.status(201).send(member)
    } catch (err) {
      next(err)
    }
  })

// GET /api/:id
router.get("/:id", async (req, res, next) => {
	try {
		const member = await Member.findByPk(req.params.id);
		if (member) {
			res.status(200).send("Success: Member Id exists");
		} else {
			res.status(404).send("Sorry, Member ID not found");
		}
	} catch (err) {
		next(err);
	}
});

