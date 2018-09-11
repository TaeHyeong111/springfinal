package com.gms.web.mbr;

import java.util.function.Function;
import java.util.function.Predicate;

import javax.websocket.Session;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.HomeCtrl;
@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@Autowired Member member;
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
	@RequestMapping(value="/modify")
	public String modify(@ModelAttribute("user") Member member) {
		memberService.modify(member);
		return "modify__success";
	}
	@RequestMapping("/remove")
	public void remove() {}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") Member param, Model model) {
		//Predicate<T> boolean test(T t) / Login
		Predicate<String> p = s -> !s.equals("");
		String view = "public:member/login.tiles";
		
		if(p.test(mbrMapper.exist(param.getUserid()))) {
			Function<Member, String> f = (t) ->{ //타입 Member = t, String = 리턴타입 
				return mbrMapper.login(t);
			};
			
			 view = (f.apply(param) != null)? // 얘가 apply해서 실행하는애 윗놈은 기능만있고 실행되지않음.
					"auth:common/contact.tiles":"public:member/login.tiles";
		}
		return view;
		
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
