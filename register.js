/*day06 Demo2可供参考*/

$(function(){
	//光标离开  账号文本框  事件
	$("#form-register").on("blur","#uname",checkUserName);
	//绑定光标离开  密码文本框 事件
	$("#form-register").on("blur","#upwd",checkUserPwd);
	//绑定光标离开 重输入密码框事件
	$("#form-register").on("blur","#upwdconfirm",checkUserPwdConfirm);
	//绑定光标离开  邮箱文本框事件
	$("#form-register").on("blur","#email",checkUserEmail);
	//绑定光标离开  手机号文本框事件
	$("#form-register").on("blur","#phone",checkUserPhone);
	//判断是否整体输入正确
	$("#bt-register").click(checkAll);

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

function checkUserPwdConfirm(){
	var oldPwd=$("#upwd").val();
	var newPwd=$("#upwdconfirm").val();
	if(oldPwd==newPwd){
		$(".upwdconfirm").show().html("OK").css("color","green");
		return true;
	}else{
		$(".upwdconfirm").show().html("密码与上次输入不一致").css("color","red");
		return false;
	}
}


function checkUserEmail(){
	var userEmail=$("#email").val();
	var reg=/^\w{5,18}@\w{2,6}\.[a-z]{2,4}$/;
	if(reg.test(userEmail)){
		$(".email").show().html("OK").css("color","green");
		return true;
	}else{
		$(".email").show().html("请正确输入邮箱").css("color","red");
		return false;
	}
}

function checkUserPhone(){
	var phone=$("#phone").val();
	var reg=/^1\d{10}$/;
	if(reg.test(phone)){
		$(".phone").show().html("OK").css("color","green");
		return true;
	}else{
		$(".phone").show().html("输入有误").css("color","red");
		return false;
	}
}

function checkAll(){
	var n=checkUserPhone()+checkUserEmail()
		 +checkUserPwdConfirm()+checkUserPwd()
		 +checkUserName();
	if(n==5){
		alert("注册成功");
	}else{
		alert("请重新检查输入");
	}
}