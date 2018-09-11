package com.gms.web.brd;

import java.util.function.Function;
import java.util.function.Predicate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberMapper;
import com.gms.web.mbr.MemberService;

@Controller
@RequestMapping("/board")
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Article article;
	@Autowired MemberService memberService;
	@Autowired MemberMapper mbrMapper;
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(@ModelAttribute Member member) /*<<커맨?��?��* model?? 값을 �??��?��?�� ?��?��?��*/ {
		memberService.add(member);
		System.out.println("멤버 : " + member);
		return "add__success";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public void retrieve() {}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modyfy")
	public void modify() {}
	@RequestMapping("/remove")
	public void remove() {}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") Member param, Model model) {
		//Predicate<T> boolean test(T t) / Login
		Predicate<String> p = s -> !s.equals("");
		String view = "login_failed";
		if(p.test(mbrMapper.exist(param.getUserid()))) {
			Function<Member, String> f = (t) ->{
				return mbrMapper.login(t);
			};
			view = (f.apply(param).equals("1"))?
					"login_success":"login_failes";
		}
		return view;
		
	}
	@RequestMapping("/logout")
	public String logout() {
		return "redirect:/";
	}
	@RequestMapping(value="/register")
	public String register() {
		System.out.println("?���??��?��?��?��?��");
		return "register__success";
	}
	@RequestMapping("/read")
	public String read(){
		return "read__success";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}


