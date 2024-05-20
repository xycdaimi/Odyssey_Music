// JavaScript Document
function checkEmpty(obj){
	if(!obj.value){
		//obj.nextSibling表示获取当前元素对象的下一个相邻元素对象
		//obj.nextSibling.style指的是这个相邻元素的样式
		//为obj.nextSibling.style.display赋值，就可以控制这个相邻元素是否显示
		obj.nextSibling.style.display = 'block';
	}else{
		obj.nextSibling.style.display = 'none';
	}
}
function checkPwd(obj){
	//document.getElementById可以通过传入的参数，获取指定的元素对象
	var pwd = document.getElementById('password').value;
	var pwdAgain = obj.value;
	if(pwd != pwdAgain){
		obj.nextSibling.style.display = 'block';
	}
	else{
		obj.nextSibling.style.display = 'none';
	}
}
function mr_verify(){

        //获取表单对象
        var email=document.getElementById("email");
        var password=document.getElementById("password");
        var passwordRepeat=document.getElementById("passwordRepeat");

        //验证项目是否为空
        if(email.value=='' || email.value==null){
        }
        if(password.value=='' || password.value===null){
            alert("密码不能为空！");
            return;
        }
        if(passwordRepeat.values=='' || passwordRepeat.value===null){
            alert("确认密码不能为空！");
            return;
        }
        if(password.value!==passwordRepeat.value ){
            alert("密码设置前后不一致！");
            return;
        }
        //验证邮件格式
        apos = email.value.indexOf("@")
        dotpos = email.value.lastIndexOf(".")
        if (apos < 1 || dotpos - apos < 2) {
            alert("邮箱格式错误！");
            return;
        }
        alert('注册成功！');
        window.location.href="index.html";
    }




