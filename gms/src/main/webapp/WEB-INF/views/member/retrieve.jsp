<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<body>
<div id="wrapper">
    
    <div id="content">
        <table id="mypage-table">  
        <tr>
            <th  rowspan='3'>	<img src="${img}/${profile}" alt="" />	</th> 
            
            <th>아이디</th>
            <th colspan='2'>${user.userid} </th>
        </tr>
        <tr>
            <th>이름</th>
            <th colspan='2'>${user.name}</th>
        </tr>
        <tr>
            <th>비밀번호</th>
            <th colspan='2'>************</th>
        </tr>
        <tr>
            <th>나이</th>
            <th>${user.age}</th>
            <th>팀명</th>
            <th>${user.teamid}</th>
        </tr>
        <tr>
            <th>성별</th>
            <th>${user.gender}</th>
            <th>역할</th>
            <th>${user.roll}</th>
        </tr>
    </table>
    <div id="mypage-bottom">
         <a id="myPageMoveToUpdate"> UPADATE FORM</a> 
         <a id="myPageMoveToDelete"> DELETE FORM </a> 
    </div>
    </div></div>
    <script>
    $('#myPageMoveToUpdate').click(function(){
    	location.href = "${ctx}/move/auth/member/modify"
    })
    $('#myPageMoveToDelete').click(function(){
    	location.href = "${ctx}/member/remove"
    })
    </script>
</body></html>