<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

 <title>FirstTest.html</title>
 <script type="text/javascript" src="script/jquery-1.8.1.min.js"></script>
     <script language="javascript">
        function onclickAjax(){
            var xmlHttp;
            //分浏览器创建XMLHttp对象
if(window.XMLHttpRequest){
                xmlHttp=new XMLHttpRequest();
            }else if(window.ActiveXObject){
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")
            }
            //设置请求类型
            xmlHttp.open("POST","LxServlet?method=ajaxTest&&msg="+new Date(),true);
            //回调函数
            xmlHttp.onreadystatechange=function(){
                if(xmlHttp.readyState==4){
                    if(xmlHttp.status==200){
                        document.getElementById("testid").value=xmlHttp.responseText;
                    }else{
                        alert("AJAX服务器返回错误！");
                    }    
                }
            }
            //发送请求
            xmlHttp.send();
        }
     </script>
</head>
<body>
<input type="button" value="测试" onclick="onclickAjax()">
    <div id="testid">
    </div>
</input>
</body>
</html>