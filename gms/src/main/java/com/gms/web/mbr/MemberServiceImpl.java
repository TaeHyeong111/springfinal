package com.gms.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;



@Service /*@Service?���??��?��*/
public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper memberMapper;
	@Override
	public void add(Member p) {
		int stf = Integer.valueOf(new SimpleDateFormat("yyyy").format(new Date()))+1-1900;
        String ssn = p.getSsn();
        String gender = "";
        int a = stf - Integer.parseInt(ssn.substring(0,2));
        gender=(ssn.substring(7,8).equals("1"))? "man":"woman" ;
        p.setAge(String.valueOf(stf - Integer.parseInt(ssn.substring(0,2))));
        p.setGender(gender);
	memberMapper.add(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member retrieve(Member p) {
		return null;
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(Member p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void remove(Member p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String login(Member p) {
		return memberMapper.login(p);
	}

	@Override
	public String exist(String p) {
		// TODO Auto-generated method stub
		return memberMapper.exist(p);
	}
	
}
