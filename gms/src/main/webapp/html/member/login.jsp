<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<body>
	<h1>Login</h1>
	<form id="userLoginForm" name="userLoginForm">
		User ID : <input type="text" name="userid" /> <br>
		 Password : <input	type="text" name="password" /> 
		 <input id="loginFormBtn" type="button" value="submit" />  
		 <input type="hidden" name="action"	value="login" />
		  <input type="hidden" name="page" value="retrieve" />
	</form>

	 <script>
	 
		$('#loginFormBtn').click(function(){
				$('#userLoginForm').attr({
					action:"${ctx}/member/login",
					method:"POST"
				})
				.submit();
			})
    </script> 
</body>
</html>
