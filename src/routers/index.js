import express from 'express';
import UserService from "../services/UserService";
import User    from    "../models/User";
import httpStatus from "../../configs/httpStatus.json";

/** */
let router = express.Router();
let userService=new UserService();

/**public */
router.get("/", (req, res) => {
	let method="routers/home";
	console.log(method+" ===>start");

	res.json({"status":httpStatus.success,"Project Name":"esusers-api"});
});

router.get("/user/list", async(req, res) => {
	let method="routers/list";
	console.log(method+" ===>start");

	let result;
	try {
		result=await userService.getAll();

		console.log(method+" -->success");
		res.json({"status":httpStatus.success,"data":result});
	} catch (error) {
		console.log(method+" -->failed");
		res.json({"status":httpStatus.failed});
	}

});

router.post("/user/add",async(req,res)=>{
	let method="routers/user/add";
	console.log(method+" ===>start");
	
	let user=new User(null,req.body.name,req.body.email,req.body.phone);
		try {
			let result=await userService.insert(user);

			console.log(method+" -->success");
			res.json({"status":httpStatus.success,"data":result});
		} catch (error) {
			console.log(method+" -->failed");
			res.json({"status":httpStatus.failed});			
		}
});

router.get("/user/getUserByID/:_userID",async(req,res)=>{
	let method="routers/user/update";
	console.log(method+" ===>start");

	try {
		let result= await userService.getUserByID(req.params._userID);

		console.log(method+" -->success");
		res.json({"status":httpStatus.success,"data":result[0]});	
	} catch (error) {
		console.log(method+" -->failed");
		res.json({"status":httpStatus.failed});			
	}
});

router.put("/user/update/:_userID",async(req,res)=>{
	let method="routers/user/update";
	console.log(method+" ===>start");

	try {
		let user=new User(req.params._userID,req.body.name,req.body.email,req.body.phone);
		let result= await userService.update(user);

		console.log(method+" -->success");
		res.json({"status":httpStatus.success,"data":result});
	} catch (error) {
		console.log(method+" -->failed");
		res.json({"status":httpStatus.failed});			
	}
});

router.delete("/user/delete/:_userID",async(req,res)=>{
	let method="routers/user/delete";
	console.log(method+" ===>start");

	try {
		let result= await userService.delete(req.params._userID);
		
		console.log(method+" -->success");
		res.json({"status":httpStatus.success,"data":result});
	} catch (error) {
		console.log(method+" -->failed");
		res.json({"status":httpStatus.failed});			
	}
});

router.post("/user/search", async(req, res) => {
	let method="routers/list";
	console.log(method+" ===>start");

	let result;
	try {
		result=await userService.getUserByName(req.body.keyword);

		console.log(method+" -->success");
		res.json({"status":httpStatus.success,"data":result});
	} catch (error) {
		console.log(method+" -->failed");
		res.json({"status":httpStatus.failed});
	}

});

/**export */
module.exports = router;