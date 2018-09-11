package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
/*Lazy?Š” Contextê°? ?•„?š”?• ?•Œë§? ë§Œë“ ?‹¤. ë¡œë”©?‹œê°„ë‹¨ì¶?*/
@Data @Lazy @Component
public class ArticleDTO {
	private String title,content,writer,regdate,viewcnt;
}
