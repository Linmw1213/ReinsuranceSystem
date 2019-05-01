package pers.lmw.reins.sys.backend.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.dao.UserMapper;
import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;
import pers.lmw.reins.sys.backend.service.UserService;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	UserService service;
	HttpSession session;

	@Autowired
	UserMapper mapper;

	@RequestMapping("/login")
	public Role login(@RequestBody(required = false) User user) {
		User u = service.login(user);
		if (u != null) {
			return service.queryRole(user);
		} else {
			return null;
		}
	}
	
	@RequestMapping("/info")
	public User userInfo() {
		return service.queryInfo(session.getAttribute("userId").toString());
	}
	
	
}
