//Jerry
const express = require('express');
const db = require("../db/myAuthDB.js");

const router = express.Router();

router.get("/getPaths", async (req, res) => {
	try{
		const arrayOfPaths = await db.getPaths();
		if (arrayOfPaths.length > 0) {
			res.json({paths: arrayOfPaths});
		}
	} catch(e) {
		console.log(e);
	}
	
});


router.get("/getPathRecs", async (req, res) => {
	try{
		const arrayOfPathRecs = await db.getPathRecs();
		console.log("array of path recs is: ",arrayOfPathRecs);
		if (arrayOfPathRecs) {
			console.log("paths recs are: ", arrayOfPathRecs);
			res.json({pathRecs: arrayOfPathRecs});
		}
	} catch(e) {
		console.log(e);
	}
	
});


router.get("/getCourseName", async (req, res) => {
	try{
		const arrOfCourses = await db.getCourses();
		if (arrOfCourses) {
			res.json({courses: arrOfCourses});
		}
	} catch(e) {
		console.log(e);
	}
});


router.get("/getUserPlans", async (req, res) => {
	try {
		const arrOfPlans = await db.getUserPlans();
		if (arrOfPlans) {
			res.json({plans: arrOfPlans});
		}
	} catch(e) {
		console.log(e);
	}
});


router.post("/createPlan", async (req, res) => {
	let userPlan = {courses: req.body};
	if (await db.createPlan(userPlan)) {
		res.json({success: true, msg: "Plan created successfully"});
	} else {
		res.json({success: false, msg: "Error creating plan"});
	}
});

module.exports = router;