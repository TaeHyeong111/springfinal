package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Data // d
public class MemberDTO {
	private String userid, ssn, name, roll, teamid, password, age, subject, gender;
	
}
