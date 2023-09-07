package com.moviebookingapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.moviebookingapp.models.Role;
import com.moviebookingapp.serviceImpl.RoleService;



@Controller
public class RestController {
	
	 @Autowired
	 private RoleService roleservice;  
	 @PostMapping({"/createNewRole"})
	public Role createNewRole(@RequestBody Role role) {
		 return roleservice.createNewRole(role);
		
		 
		
	}
	 
	 

}
