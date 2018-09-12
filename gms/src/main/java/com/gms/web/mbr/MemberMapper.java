package com.gms.web.mbr;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
@Repository
public interface MemberMapper {
	public void add(Member p);
	public List<?> list(Map<?,?>p); 
	public List<?> search(Map<?,?>p); 
	public Member retrieve(Member p); 
	public int count(Map<?,?>p);
	public void update(Member p);
	public void delete(Member p);
	public String login(Member p);
	public String exist(String p);
}