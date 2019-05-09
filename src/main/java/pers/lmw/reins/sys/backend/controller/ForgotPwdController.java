package pers.lmw.reins.sys.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.dao.ForgotPwdMapper;
import pers.lmw.reins.sys.backend.entity.User;

@CrossOrigin
@RestController
@RequestMapping("/forgotPwd")
public class ForgotPwdController {

	@Autowired
	ForgotPwdMapper mapper;
	
	@RequestMapping("/confirmUser")
	public int confirmUser(@RequestBody(required=false) User u ) {
		User user = mapper.confirm(u);
		return 1;
	}
	
	@PostMapping("/reset")
	public int resetPwd(@RequestBody User u) {
		return 1;
	}
	
}
