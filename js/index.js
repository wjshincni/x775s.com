//定義變量
var timeCount = 300,
	ipAr,
	ipAdrs,
	uName,
	uAge,
	uPwd,
	uCtt;
window.onload = (function(){
	setInterval(function(){
		timeCount--;
	},1000)
	setInterval(function(){
		changeImg();
	},10000)
})

//圖片
function changeImg(){
	var img = document.getElementById("img"),
		imgRecent = img.src[img.src.length - 5],
		imgNext;
	if(imgRecent == 8){
		imgNext = 1;
	}
	else{
		var imgBase = img.src,
			imgBase = imgBase[imgBase.length - 5],
		imgNext = parseInt(imgBase);
		imgNext++;

	}
	img.src = "img/" + imgNext + ".png";
}

//table1
function ipCheck(){//檢測IP
	var ipArea = document.getElementById('ipCheck1'),
		ipAddress = document.getElementById('ipCheck2'),
		ipChkBtn = document.getElementById('ipCheck3');
	ipArea.placeholder = "正在檢測...";
	ipAddress.placeholder = "正在檢測...";
	ipAddress.style.width = "80%";
	ipChkBtn.style.display = "none";
	setTimeout(function(){
		ipArea.placeholder = "完成！請求代碼：000XX04e7";
		ipAddress.placeholder = "完成！請求代碼：000F0000X";
		setTimeout(function(){
			ipArea.value = "中國上海";
			ipAddress.value = random(100,200) + "." + random(100,200) + "." + random(0,100) + "." + random(100,200);
			document.getElementById('ipCheck5').innerHTML = "18緊,棋牌,麻將,后肏,少婦,閒童,跑車,同興,獵奇,拖拉機,水管組裝"
		},500)
	},1500)
}

function table1Next(){//下一頁
	var ipArea = document.getElementById('ipCheck1'),
		ipAddress = document.getElementById('ipCheck2');
	if (ipArea.value&&ipAddress.value){
		ipAr = ipArea.value;
		ipAdrs = ipAddress.value;
		var table1 = document.getElementById('table1'),
			table2 = document.getElementById('table2');
		table1.style.opacity = "0";
		setTimeout(function(){
			table2.style.opacity = "1";
		},3000)
	}
	else{
		document.getElementById('ipCheck5').innerHTML = "錯誤！您未完整填寫IP屬地或地址！如果有技術問題，可以點擊旁邊的檢測按鈕。";
	}
}

//table2
function table2Next(){
	var	userName = document.getElementById('userBuild1'),
		userAge = document.getElementById('userBuild2'),
		userPassword = document.getElementById('userBuild3'),
		userContact = document.getElementById('userBuild4');
	if (userName.value&&userAge.value&&userPassword.value){
		uName = userName.value;
		uAge = parseInt(userAge.value);
		uPwd = userPassword.value;
		uCtt = userContact.value;
		var table2 = document.getElementById('table2');
			table3 = document.getElementById('table3');
		table2.style.opacity = "0";
		setTimeout(function(){
			table3.style.opacity = "1";
			var u1 = document.getElementById('accountCheck1');
			var u2 = document.getElementById('accountCheck2');
			var u3 = document.getElementById('accountCheck3');
			var u4 = document.getElementById('accountCheck4');
			u1.value = uName;
			u2.value = uAge;
			u3.value = uPwd;
			u4.value = uCtt;
		},3000)
	}
	else{
		document.getElementById('userBuild5').innerHTML = "錯誤！您未完整填寫名稱、年齡或密碼！";
	}
}

//table3
function table3Next(){
	var aName = document.getElementById('accountCheck1'),
		aAge = document.getElementById('accountCheck2'),
		aPwd = document.getElementById('accountCheck3'),
		table3 = document.getElementById('table3'),
		table4 = document.getElementById('table4');
	if(aName.value&&aAge.value&&aPwd.value){
		uName = aName.value;
		uAge = aAge.value;
		table3.style.opacity = "0";
		setTimeout(function(){
			table4.style.opacity = "1";
			table4ReFlash();
		},3000)
	}
}

//table4
function table4ReFlash(){
	setInterval(function(){
		document.getElementById('timeRest').innerHTML = "歡迎" + uAge + "嵗的" + uName + "！ <br>我們正在爲您準備您的個性化内容！<br>您還需再等待" + timeCount + "秒即可跳轉網頁！";
	},1000)
}

function random(min,max){//獲取隨機數
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
