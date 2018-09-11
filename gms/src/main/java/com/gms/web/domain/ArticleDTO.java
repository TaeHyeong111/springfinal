package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
/*Lazy?�� Context�? ?��?��?��?���? 만든?��. 로딩?��간단�?*/
@Data @Lazy @Component
public class ArticleDTO {
	private String title,content,writer,regdate,viewcnt;
}
