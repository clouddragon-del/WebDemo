/*day06 Demo2可供参考*/

$(function(){
	//光标离开  账号文本框  事件
	$("#form-register").on("blur","#uname",checkUserName);
	//绑定光标离开  密码文本框 事件
	$("#form-register").on("blue","#upwd",checkUserPwd);
});

function checkUserName(){
	var reg=/^\w{6,9}$/;//正则数字，字母在六到九之间
	var userName=$("#uname").val();//获取文本框值
	if(reg.test(userName)){//判断是否与正则一致
		$(".uname").html("OK").css("color","green");//改变文本框后的span内容并显示绿色
		return true;//return true方便后面检查用户输入的所有信息正确
	}else{//正则不一致
		$(".uname").html("用户名长度在6到9位之间").css("color","red");//改变文本框后的span的颜色显示红色
		return false;
	}
}

function checkUserPwd(){
	var reg=/^\w{6,12}$/;
	var userPwd=$("#upwd").val();
	if(reg.test(userPwd)){
		$(".upwd").show().html("OK").css("color","green");
		return true;
	}else{
		$(".upwd").show().html("密码长度在6-12位之间").css("color","red");
		return false;
	}
}