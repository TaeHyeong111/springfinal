package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component // <컴포?��?���? Data�? 빈으�? 만들?���?
@Data
public class ImageDTO {
	private String imgseq; //?��미�?번호
	private String imgName;
	private String extension;
	private String userid;
}
