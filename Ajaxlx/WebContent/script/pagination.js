//分页函数
function page4ajax(obj,data,objId,functionName){
	obj.empty();
	var page="";
	if(data.totalCount>0){
		if ( data.currentPageNum > 1 ) {
			page=page+"<a name='pagination' onclick='"+functionName+"("+data.prePageNum+","+objId+")'>上一页</a>";
		}
		if(data.totalPageNum<=5)
			for(var i=1;i<=data.totalPageNum;i++){
				if(i==data.currentPageNum)
					page=page+"<a name='pagination' class='set' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
				else
					page=page+"<a name='pagination' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
			}
		else{
			if(data.currentPageNum-4<=1){
				for(var i=1;i<=data.currentPageNum;i++){
					if(i==data.currentPageNum)
						page=page+"<a name='pagination' class='set' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
					else
						page=page+"<a name='pagination' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
				}
				if(data.currentPageNum+3>=data.totalPageNum ){
					for(var i=data.currentPageNum+1;i<=data.totalPageNum;i++){
						if(i==data.currentPageNum)
							page=page+"<a name='pagination' class='set' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
						else
							page=page+"<a name='pagination' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
					}
					
				}else{
					for(var i=data.currentPageNum+1;i<=data.currentPageNum+2;i++){
						page=page+"<a name='pagination' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
					}
					page=page+"...";
					page=page+"<a name='pagination' href='#' onclick='"+functionName+"("+data.totalPageNum+","+objId+")'>"+data.totalPageNum+"</a>";
				}
			}else{
				page=page+"<a name='pagination' href='#' onclick='"+functionName+"(1,"+objId+")'>1</a>...";
				if(data.currentPageNum+3>=data.totalPageNum){
					for(var i=data.currentPageNum-2;i<=data.totalPageNum;i++){
						if(i==data.currentPageNum)
							page=page+"<a name='pagination' class='set' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
						else
							page=page+"<a name='pagination' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
					}
				}else{
					for(var i=data.currentPageNum-2;i<=data.currentPageNum+2;i++){
						if(i==data.currentPageNum)
							page=page+"<a name='pagination' class='set' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
						else
							page=page+"<a name='pagination' onclick='"+functionName+"("+i+","+objId+")'>"+i+"</a>";
					}
					page=page+"...<a name='pagination' href='#' onclick='"+functionName+"("+data.totalPageNum+","+objId+")'>"+data.totalPageNum+"</a>";
				}
			}
		}
		if ( data.currentPageNum < data.totalPageNum ) {
			page=page+"<a name='pagination' onclick='"+functionName+"("+data.nextPageNum+","+objId+")'>下一页</a>";
		}
	}
	obj.append(page);
}