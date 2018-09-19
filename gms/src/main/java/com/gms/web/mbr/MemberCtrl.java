package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.cmm.YoonHo;

@Controller
@RequestMapping("/member")
@RestController
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member mbr; //Autowired 객체를 만들어주는애
	@Autowired MemberMapper mbrMap;
	@PostMapping("/add")
	public void add(@RequestBody Member param) {
		System.out.println(param);
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public void retrieve() {}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify")
	public String modify(@ModelAttribute("user") Member member) {
		return "modify__success";
	}
	@RequestMapping("/remove")
	public void remove() {}
	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member pm) {
		YoonHo.log.accept("\n --------- MemberController !!--------");
		Map<String,Object> rm = new HashMap<>();
		YoonHo.log.accept("넘어온 정보: " + pm.toString());
		String pwValid = "WRONG";
		String idValid = "WRONG";
		YoonHo.log.accept("userid : "+ pm.getUserid());
		YoonHo.log.accept("userPassword : "+ pm.getPassword());
		if(mbrMap.count(pm)!=0) {
			idValid = "CORRECT";
			YoonHo.log.accept("ID 유효성체크결과 : " + idValid);
			Function<Member,Member> f=(t)->{
				return mbrMap.get(t);
			};
			mbr = f.apply(pm);
			pwValid =(mbr != null) ?"CORRECT" : "WRONG";
			mbr =(mbr != null)? mbr: new Member() ;
			YoonHo.log.accept("PW 유효성체크결과 : " + pwValid);
		}
		rm.put("ID", idValid);
		rm.put("PW", pwValid);
		rm.put("MBR", mbr);
		return rm;
	}
	
	@RequestMapping("/logout")
	public String logout() {
		return "redirect:/";
	}
	@RequestMapping("/mypage")
	public String mypage() {
		
		return "auth:member/retrieve.tiles";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
