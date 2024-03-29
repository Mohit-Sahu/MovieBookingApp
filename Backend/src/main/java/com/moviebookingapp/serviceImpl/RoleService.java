package com.moviebookingapp.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moviebookingapp.Repository.RoleDao;
import com.moviebookingapp.models.Role;


@Service
public class RoleService {
	@Autowired
	private RoleDao roleDao;
	public Role createNewRole(Role role) {
		return roleDao.save(role);
	}

}
