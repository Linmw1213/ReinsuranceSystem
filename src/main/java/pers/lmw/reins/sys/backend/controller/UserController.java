package pers.lmw.reins.sys.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;
import pers.lmw.reins.sys.backend.service.UserService;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	UserService service;

	@RequestMapping("/login")
	public Role login(@RequestBody(required = false) User user) {
		User u = service.login(user);
		if (u != null) {
			return service.queryRole(user);
		} else {
			return null;
		}
	}
	
	@GetMapping("/getCurrentUser/{userId}")
	public User userInfo(@PathVariable(value="userId") String userId) {
		return service.queryInfo(userId);
	}
	
//	@PostMapping("/add")
//	public int add(@RequestBody User u) {
//		return service.a
//	}
	
	
	
	
}
