"use strict"; /*선언함으로써 에러시 넘어가지않음*/
var app = app || {}; 
var user = user || {};
app = {
		init : x=>{
			app.session.ctx(x)
			app.onCreate();
		},
		onCreate : ()=>{
			console.log('step3')
			app.setContentView()
			$('#login_btn').click(()=>{ (/web/move/member/login)
				location.href = app.x()+'/move/public/member/login'
			})
			$('#join_btn').click(()=>{
				location.href = app.x()+'/move/public/member/add'
			})
			
			$('#joinFormBtn').click(()=>{
				alert("joinForm 버튼클릭!")
				var form = document.getElementById('#joinForm');
				form.action = app.x()+"/member/add"
				form.method = "POST"; //get은 입력값을 노출, post는 노출x form태그만 post방식이 있음
			})
			$('#joinFormBtn').click(()=>{
				$('#joinForm').attr({
					action:app.x()+"/member/add",
					method:"POST"
			})
			.submit();
			})
			
			$('#loginFormBtn').click(()=>{
				app.session.click(document.getElementById('userLoginForm').password.value)
				$('#userLoginForm').attr({
					action:app.x()+"/member/login",
					method:"POST"
				})
				.submit();
			})
			$('mypage_btn').click(()=>{
				alert('마이페이지로 이동')
				location.href = app.x()+'member/retrieve/'+userid
			})
			$('#myPageMoveToUpdate').click(()=>{
				alert(app.click())
			})
			.submit();
			
			$('#logout_btn').click(()=>{
				location.href = app.x()+'/member/logout'
			})
			.submit();
			
			setContentView : ()=>{
				console.log('step4 ::'+app.j());
			}
	}
}