package com.gms.exam;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy  //교차엔티티를 만들었다.
public class Exam {
	String sbjSeq, exmSeq, term, score, userid;
}

