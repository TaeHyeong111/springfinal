package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Data @Lazy// d
public class Member {
	private String userid, ssn, name, roll, teamid, password, age, subject, gender;
	
}
