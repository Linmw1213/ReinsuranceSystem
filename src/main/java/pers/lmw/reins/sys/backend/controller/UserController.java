package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.dao.LogMapper;
import pers.lmw.reins.sys.backend.dao.UserMapper;
import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;
import pers.lmw.reins.sys.backend.entity.UserRole;
import pers.lmw.reins.sys.backend.service.UserService;
import pers.lmw.reins.sys.backend.util.TransferTimeUtil;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping(value = "/userInfo")
public class UserController {

	@Autowired
	UserService service;
	
	@Autowired
	UserMapper mapper;
	
	@Autowired
	LogMapper logMapper;
	
	@Autowired
	TransferTimeUtil timeUtil;

	@RequestMapping("/login")
	public Role login(@RequestBody(required = false) User user) {
		User u = service.login(user);
		if (u != null) {
			user.setLoginTime(timeUtil.getCurrentTime());
			logMapper.setLoginTime(user);
			return service.queryRole(user.getUserId());
		} else {
			return null;
		}
	}
	
	@GetMapping("/getRole/{id}")
	public Role getRole(@PathVariable("id") String id) {
		return service.queryRole(id);
	}

	@GetMapping("/getAll")
	public List<User> getAll() {
		return service.getAll();
	}

	@GetMapping("/getCurrentUser/{userId}")
	public User userInfo(@PathVariable(value = "userId") String userId) {
		return service.queryInfo(userId);
	}

	@PutMapping("/update")
	public int update(@RequestBody User u) {
		return service.updateMsg(u);
	}

	@PutMapping("/updatePwd")
	public int updatePwd(@RequestBody User u) {
		return service.updatePwd(u);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public int deleteUser(@PathVariable("userId") String userId) {
		return service.deleteUser(userId);
	}
	
	@DeleteMapping("/deleteRole/{uid}")
	public int deleteRole(@PathVariable("uid") String uid) {
		return service.deleteRole(uid);
	}
	
	@PostMapping("/addUser")
	public int addUser(@RequestBody User u) {
		return service.addUser(u);
	}
	
	@PostMapping("/addRole")
	public int addRole(@RequestBody UserRole r) {
		return service.addRole(r);
	}
	
	@GetMapping("/getLastUserId")
	public User getLastUserId() {
		return mapper.getLastUserId();
	}
	
	@PutMapping("/updateRole")
	public int updataRole(@RequestBody UserRole ur) {
		return mapper.updateRole(ur);
	}

}
