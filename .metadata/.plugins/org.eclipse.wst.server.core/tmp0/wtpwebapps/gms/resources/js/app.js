"use strict"; /*선언함으로써 에러시 넘어가지않음*/
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})();
app.main=(()=>{
	var w,header,footer,content,nav,ctx,script,style,about,projects,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		header = script + '/header.js';
		content = script + '/content.js';
		nav = script + '/navigation.js';
		footer = script + '/footer.js';
		about = script + '/about.js';
		projects = script + '/projects.js';
		
		
		onCreate();
		
	}
	var onCreate =()=>{
		setContentView();
	}
	var setContentView =()=>{
		 /*console.log('step2'); 
		 
		 console.log(header)
		 $.getScript(header,()=>{
				w.html(headerUI());
			});*/
	        // 자스 Promise 비동기 로직 다루기
	        $.when(
	            $.getScript($.script()+'/about.js'),
	            $.getScript($.script()+'/content.js'),
	            $.getScript($.script()+'/footer.js'),
	            $.getScript($.script()+'/header.js'),
	            $.getScript($.script()+'/navigation.js'),
	            $.getScript($.script()+'/projects.js'),
	            $.Deferred(y=>{
	                $(y.resolve);
	            })
	        ).done(z=>{
	            w.html(navigationUI()
	            		+headerUI()
	            		+aboutUI()
	            		+projectsUI()
	            		+contentUI()
	                    
	                    +footerUI()
	            );
	            $('#login_btn').click(e=>{ // 얘버튼해야함!!!!!
	            	
	            	app.permission.login();
	            });
	            /*$('#board').click(e=>{
	            	app.board.init();
	            })*/
	        })
	        .fail(x=>{
	            console.log('로드 실패');
	        })
	     };
	return {init : init};
})();
app.board = (()=>{
	var init =()=>{
		onCreate()
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('Board');
		$('#header').remove();
		$('#content').empty();
		
	};
	return {init : init}
	
	var list = ()=>{
		alert('게시판')
	}
	return {init : init}
})();
app.permission = (()=>{
	var login =()=>{
		alert('login');
		//$('#header').remove();
		$('#content').empty();
		$.getScript($.script()+"/login.js", ()=>{
			$('#content').html(loginUI());
		})
	};
	return {login : login};
})();

app.router = {
	    init : x =>{
	    	console.log('eeee');
	        $.getScript(x+'/resources/js/router.js',  // $.은 JQuery 객체 
	                ()=>{
	                    $.extend(new Session(x)); // new는 session의 copy 개념임
	                    $.getScript($.ctx()+'/resources/js/util.js') //프로토타입은 : $.fn.ctx
	                    .done(x=>{console.log('실행');
	                    app.main.init();
	                    })
	                    .fail(x=>{console.log('실패')});
	                    app.main.init();
	                }
	        );
	    }
	};

/*app = (x=>{
	var init = x=>{
		app.session.ctx(x)
		app.onCreate();
	}
	 var onCreate = ()=>{
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
})()*/