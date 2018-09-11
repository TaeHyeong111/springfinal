package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component // <ì»´í¬?„Œ?Š¸ê°? Dataë¥? ë¹ˆìœ¼ë¡? ë§Œë“¤?–´ì¤?
@Data
public class ImageDTO {
	private String imgseq; //?´ë¯¸ì?ë²ˆí˜¸
	private String imgName;
	private String extension;
	private String userid;
}
