package com.gms.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
/*Lazy?�� Context�? ?��?��?��?���? 만든?��. 로딩?��간단�?*/
@Data @Lazy @Component
public class Article {
	private String title,content,writer,regdate,viewcnt;
}
