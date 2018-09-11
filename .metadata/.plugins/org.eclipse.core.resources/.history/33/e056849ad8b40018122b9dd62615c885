package com.gms.web.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("ctx")
public class HomeController {
	
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpSession session, HttpServletRequest request) {
		String ctx = request.getContextPath();
		logger.info("Welcome home! The client locale is {}.", ctx);
		session.setAttribute("ctx",ctx);/*request를 model로 감쌈*/
		return "public:common/contact.tiles";
	}
	@RequestMapping("/move/{frepix}/{dir}/{page}")
	public String move(		
			@PathVariable String frepix,
			@PathVariable String dir,
			@PathVariable String page) {
		String ret = frepix+":"+dir+"/"+page+".tiles";
		logger.info("ret : "+ret);
		
		return ret;
		/*if(page.equals("login")||page.equals("add")||page.equals("nav")) {
			ret = "auth:"+dir+"/"+page+".tiles";
		} 
		return ret;
		*/
	}
}
