<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
        <input type="hidden" id="session_id" value="${user.userid}"/>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" id="logout_btn">로그아웃</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" id="join_btn">회원가입</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#signup">게시글쓰기</a>
            </li>
            <li><a id="board__write">게시글작성</a></li>
            
            <li><a id="board__list">게시글보기</a> </li>
          </ul>
        </div>
      </div>
    </nav>
     <script>
     $('#logout_btn').click(function(){
    	 location.href = "${ctx}/member/logout"
     })
     $('#board__write').click(function(){
		location.href="${ctx}/board/register"
	})
	$('#board__list').click(function(){
		alert("보드리스트 클릭")
	})
     </script>
