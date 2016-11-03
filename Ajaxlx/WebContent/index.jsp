<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<script type="text/javascript" src="script/jquery-1.8.1.min.js"></script>
<script type="text/javascript">
	function checkEamil() {
		$.get("CheckServlet",{'emailName':$('#email').val()}, function(data, status) {
			if(data=="exist"){
				$('#showMsg').text("该邮箱已被注册");
			}else{
				$('#showMsg').text("");
			}
		});
	}
</script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form action="" method="post">
		<input type="text" id="email" name="eamil" onblur="checkEamil()" /><br /> 
		<div id="showMsg"><h3>欢迎来到Ajax世界</h3></div>
		<input
			type="submit" value="regist">

	</form>
</body>
</html>