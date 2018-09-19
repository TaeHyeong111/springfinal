package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeCtrl {
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request) {
		model.addAttribute("ctx",YoonHo.ctx.apply(request));
		return "main";
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
