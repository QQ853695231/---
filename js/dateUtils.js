//-----------------------------------日期验证 开始-----------------------------//
//日期验证 格式:yyyy-mm-dd
function checkStrDate_yyyy_mm_dd(param){
	var isOk=true;
	try{
		var aRegExp=/^(\d{4})-(\d{2})-(\d{2})$/; 
	    var r=param.match(aRegExp); 
	    var d=new Date(r[1],r[2]-1,r[3]); 
	    isOk=(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]); 		
	}catch(e){
		isOk=false;
	}
	return isOk;
}	

//日期验证 格式:yyyy-mm-dd hh:mm
function checkStrDate_yyyy_mm_dd_hh_mm(param){
	var isOk=true;
	try{
		var aRegExp=/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    var d=new Date(r[1],r[2]-1,r[3],r[4],r[5]); 
	    isOk=(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]&&d.getHours()==r[4]&&d.getMinutes()==r[5]); 		
	}catch(e){
		isOk=false;
	}
	return isOk;
}	

//日期验证 格式:yyyy-mm-dd hh:mm:ss
function checkStrDate_yyyy_mm_dd_hh_mm_ss(param){
	var isOk=true;
	try{
		var aRegExp=/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    var d=new Date(r[1],r[2]-1,r[3],r[4],r[5],r[6]); 
	    isOk=(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]&&d.getHours()==r[4]&&d.getMinutes()==r[5]&&d.getSeconds()==r[6]); 		
	}catch(e){
		isOk=false;
	}
	return isOk;
}	

//日期验证 格式:yyyymmdd
function checkStrDate_yyyymmdd(param){
	var isOk=true;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})$/; 
	    var r=param.match(aRegExp); 
	    var d=new Date(r[1],r[2]-1,r[3]); 
	    isOk=(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]); 		
	}catch(e){
		isOk=false;
	}
	return isOk;
}	

//日期验证 格式:yyyymmddhhmm
function checkStrDate_yyyymmddhhmm(param){
	var isOk=true;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    var d=new Date(r[1],r[2]-1,r[3],r[4],r[5]); 
	    isOk=(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]&&d.getHours()==r[4]&&d.getMinutes()==r[5]); 		
	}catch(e){
		isOk=false;
	}
	return isOk;
}	

//日期验证 格式:yyyymmddhhmmss
function checkStrDate_yyyymmddhhmmss(param){
	var isOk=true;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    var d=new Date(r[1],r[2]-1,r[3],r[4],r[5],r[6]); 
	    isOk=(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]&&d.getHours()==r[4]&&d.getMinutes()==r[5]&&d.getSeconds()==r[6]); 		
	}catch(e){
		isOk=false;
	}
	return isOk;
}
//-----------------------------------日期验证 结束-----------------------------//


//-----------------------------------date to string 开始-----------------------------//

//将Date类型，转换成String,格式:yyyy-mm-dd
function dateToStr_yyyy_mm_dd(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
			
		dateStr=nowYear+"-"+nowMonth+"-"+nowDay;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:yyyy-mm-dd hh:mm
function dateToStr_yyyy_mm_dd_hh_mm(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate(); 
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
			
		dateStr=nowYear+"-"+nowMonth+"-"+nowDay+" "+nowHour+":"+nowMinute;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:yyyy-mm-dd hh:mm:ss
function dateToStr_yyyy_mm_dd_hh_mm_ss(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate(); 
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		var nowSecond=date.getSeconds();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
		nowSecond=nowSecond>=10?nowSecond:"0"+nowSecond; 
			
		dateStr=nowYear+"-"+nowMonth+"-"+nowDay+" "+nowHour+":"+nowMinute+":"+nowSecond;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:yyyymmddhh24missff3
function dateToStr_yyyymmddhh24missff3(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate(); 
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		var nowSecond=date.getSeconds();
		var nowSecond=date.getSeconds();
		var nowMilliseconds=date.getMilliseconds();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
		nowSecond=nowSecond>=10?nowSecond:"0"+nowSecond;
		if(nowMilliseconds < 100 && nowMilliseconds < 10){
			nowMilliseconds="00"+nowMilliseconds;
		}else if(nowMilliseconds < 100 && nowMilliseconds >= 10){
			nowMilliseconds="0"+nowMilliseconds;
		}
			
		dateStr=nowYear+nowMonth+nowDay+nowHour+nowMinute+nowSecond+nowMilliseconds;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:hh:mm:ss
function dateToStr_hh_mm_ss(date){
	var dateStr="";
	try{	
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		var nowSecond=date.getSeconds();
		
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
		nowSecond=nowSecond>=10?nowSecond:"0"+nowSecond; 
			
		dateStr=nowHour+":"+nowMinute+":"+nowSecond;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
}

//将Date类型，转换成String,格式:yyyymmdd
function dateToStr_yyyymmdd(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
			
		dateStr=""+nowYear+nowMonth+nowDay;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:hhmmss
function dateToStr_hhmmss(date){
	var dateStr="";
	try{
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		var nowSecond=date.getSeconds();

		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
		nowSecond=nowSecond>=10?nowSecond:"0"+nowSecond; 
			
		dateStr=""+nowHour+nowMinute+nowSecond;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:yyyymmddhh
function dateToStr_yyyymmddhh(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate(); 
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
			
		dateStr=""+nowYear+nowMonth+nowDay+nowHour;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
}

//将Date类型，转换成String,格式:yyyymmddhhmm
function dateToStr_yyyymmddhhmm(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate(); 
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
			
		dateStr=""+nowYear+nowMonth+nowDay+nowHour+nowMinute;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 

//将Date类型，转换成String,格式:yyyymmddhhmmss
function dateToStr_yyyymmddhhmmss(date){
	var dateStr="";
	try{
		var nowYear=date.getFullYear();
		var nowMonth=date.getMonth()+1;
		var nowDay=date.getDate(); 
		var nowHour=date.getHours();
		var nowMinute=date.getMinutes();
		var nowSecond=date.getSeconds();
		
		nowMonth=nowMonth>=10?nowMonth:"0"+nowMonth;
		nowDay=nowDay>=10?nowDay:"0"+nowDay; 
		nowHour=nowHour>=10?nowHour:"0"+nowHour; 
		nowMinute=nowMinute>=10?nowMinute:"0"+nowMinute; 
		nowSecond=nowSecond>=10?nowSecond:"0"+nowSecond; 
			
		dateStr=""+nowYear+nowMonth+nowDay+nowHour+nowMinute+nowSecond;  		
	}catch(e){
		dateStr="";
	}
	return dateStr;
} 
//-----------------------------------date to string 结束-----------------------------//


//-----------------------------------string to date 开始-----------------------------//

//将string类型，转换成date,格式:yyyy-mm-dd
function strToDate_yyyy_mm_dd(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})-(\d{2})-(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3]);  		
	}catch(e){
		date=null;
	}
	return date;
}

//将string类型，转换成date,格式:yyyy-mm-dd hh:mm
function strToDate_yyyy_mm_dd_hh_mm(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3],r[4],r[5]); 		
	}catch(e){
		date=null;
	}
	return date;
}

//将string类型，转换成date,格式:yyyy-mm-dd hh:mm:ss
function strToDate_yyyy_mm_dd_hh_mm_ss(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3],r[4],r[5],r[6]);  		
	}catch(e){
		date=null;
	}
	return date;
}

//将string类型，转换成date,格式:yyyymmdd
function strToDate_yyyymmdd(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3]);  		
	}catch(e){
		date=null;
	}
	return date;
}

//将string类型，转换成date,格式:yyyymmddhh
function strToDate_yyyymmddhh(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3],r[4]); 		
	}catch(e){
		date=null;
	}
	return date;
}

//将string类型，转换成date,格式:yyyymmddhhmm
function strToDate_yyyymmddhhmm(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3],r[4],r[5]); 		
	}catch(e){
		date=null;
	}
	return date;
}

//将string类型，转换成date,格式:yyyymmddhhmmss
function strToDate_yyyymmddhhmmss(param){
	var date=null;
	try{
		var aRegExp=/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/;  
	    var r=param.match(aRegExp); 
	    date=new Date(r[1],r[2]-1,r[3],r[4],r[5],r[6]);  		
	}catch(e){
		date=null;
	}
	return date;
}

//-----------------------------------string to date 结束-----------------------------//

//时间与毫秒数互相转换
/**
 * 19位日期字符串 转换为 时间戳 秒数
 * dateStr格式为YYYY-MM-DD hh:mi:ss
 * */
function StringDate19ToTimeStampSec(dateStr){
	var newstr = dateStr.replace(/-/g,'/'); 
    var date =  new Date(newstr); 
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);

}
	
/**
 * 时间戳字符串转换为19位日期格式
 * */
function TimeStampNum2Date19(nS){
	var date = new Date(parseInt(nS));
    return dateToStr_yyyy_mm_dd_hh_mm_ss(date);
}

/**
 * 时间戳字符串转换为Date
 * */
function TimeStampNum2Date(nS){
	 return new Date(parseInt(nS)); 
}

//------------------------------------日期计算 开始-----------------------------------//

//增加、减少 几个年，减少时i传负数
function addYear(date,i){
	var returnDate=null;
	try{
		returnDate=new Date();
		returnDate.setTime(date.getTime());
		returnDate.setYear(returnDate.getYear()+i);
	}catch(e){
		returnDate=null;
	}
	return returnDate;
}

//增加、减少 几个月，减少时i传负数
function addMonth(date,i){
	var returnDate=null;
	try{
		returnDate=new Date();
		returnDate.setTime(date.getTime());
		returnDate.setMonth(returnDate.getMonth()+i);
	}catch(e){
		returnDate=null;
	}
	return returnDate;
}

//增加、减少 几天，减少时i传负数
function addDate(date,i){
	var returnDate=null;
	try{
		returnDate=new Date();
		returnDate.setTime(date.getTime());
		returnDate.setDate(returnDate.getDate()+i);
	}catch(e){
		returnDate=null;
	}
	return returnDate;
}

//增加、减少 几小时，减少时i传负数
function addHour(date,i){
	var returnDate=null;
	try{
		returnDate=new Date();
		returnDate.setTime(date.getTime());
		returnDate.setHours(returnDate.getHours()+i);
	}catch(e){
		returnDate=null;
	}
	return returnDate;
}

//增加、减少 几分，减少时i传负数
function addMinute(date,i){
	var returnDate=null;
	try{
		returnDate=new Date();
		returnDate.setTime(date.getTime());
		returnDate.setMinutes(returnDate.getMinutes()+i);
	}catch(e){
		returnDate=null;
	}
	return returnDate;
}

//增加、减少 几秒，减少时i传负数
function addSecond(date,i){
	var returnDate=null;
	try{
		returnDate=new Date();
		returnDate.setTime(date.getTime());
		returnDate.setSeconds(returnDate.getSeconds()+i);
	}catch(e){
		returnDate=null;
	}
	return returnDate;
}

//日期转星期 格式:yyyy-mm-dd
function dateStrToWeek(param){
	var week="";
	try{
		var week=new Array(7);
		week["0"]="星期日";
		week["1"]="星期一";
		week["2"]="星期二";
		week["3"]="星期三";
		week["4"]="星期四";
		week["5"]="星期五";
		week["6"]="星期六";	
		var date=strToDate_yyyy_mm_dd(param);
		var day=date.getDay()
		return week[day];				
	}catch(e){
		week="";
	}
	return week;
}

//日期转星期
function dateToWeek(date){
	var week="";
	try{
		var week=new Array(7);
		week["0"]="星期日";
		week["1"]="星期一";
		week["2"]="星期二";
		week["3"]="星期三";
		week["4"]="星期四";
		week["5"]="星期五";
		week["6"]="星期六";	
		var day=date.getDay()
		return week[day];				
	}catch(e){
		week="";
	}
	return week;
}
//------------------------------------日期计算 结束-----------------------------------//

