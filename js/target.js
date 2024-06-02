function countdown(endTime) {
  const countDownDate = new Date(endTime).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
 
  if (distance < 0 && distance >= 2000) {
    clearInterval(intervalId);
    document.getElementById('timeCount').innerHTML = "中考已开始<br>期待你的好发挥吧！";
    return;
  }
  else if (distance >= 0){
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	const extraSeconds = Math.floor((distance % 1000) / 100);
	document.getElementById('timeCount').innerHTML = "距离中考还剩<br>" + days + "天<br>" + hours + "小时<br>" + minutes + "分钟<br>" + seconds + "秒<br>" + extraSeconds + '"<br>';
  }
  else{
	document.getElementById('timeCount').innerHTML = "中考结束了<br>祈祷你的好成绩！";
  }
}
 
// 中考开始时间
const endTime = 'June 15, 2024 9:00:00';
 
// 每秒更新一次倒计时
const intervalId = setInterval(countdown, 100, endTime);