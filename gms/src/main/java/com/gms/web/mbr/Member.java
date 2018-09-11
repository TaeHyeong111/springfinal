package com.gms.web.mbr;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Data // d
public class Member {
	private String userid, ssn, name, roll, teamid, password, age, subject, gender;
	
}
