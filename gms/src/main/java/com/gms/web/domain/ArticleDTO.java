package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
/*Lazy? Contextκ°? ??? ?λ§? λ§λ ?€. λ‘λ©?κ°λ¨μΆ?*/
@Data @Lazy @Component
public class ArticleDTO {
	private String title,content,writer,regdate,viewcnt;
}
