function loginUI(){
	return '<form id="userLoginForm" name="userLoginForm">'
	+'    User ID : <input id="userid" type="text" name="userid" /> <br>'
	+'     Password : <input id="password"  type="text" name="password" /> '
	+'     <input id="loginFormBtn" type="button" value="submit" />  '
	+'     <input type="hidden" name="action" value="login" />'
	+'      <input type="hidden" name="page" value="retrieve" />'
	+'  </form>';
}