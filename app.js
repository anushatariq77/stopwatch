var min = 0;
var sec = 0;
var msec = 0;
var a = document.getElementById('start');
var b = document.getElementById("pause");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var x;
function stopWatch(){
  msec++;
  msecHeading.innerHTML = msec;
  if(msec >= 100){
    sec++;
    if(sec<=9 && sec>=0){
       secHeading.innerHTML = "0" + sec;
    }else{
      secHeading.innerHTML = sec;
    }
    msec = 0;
  } else if(sec >= 60){
    min++;
    if(min<=9 && min>=0){
      minHeading.innerHTML = "0" + min;
   }else{
     minHeading.innerHTML = min;
   }
    sec = 0;
  }
}

function start(){
    x = setInterval(stopWatch,10);
    a.disabled = true;
    b.disabled = false;
}
function pause(){
  clearInterval(x);
  b.disabled = true;
  a.disabled = false;
}
function reset(){
  min = "00";
  sec = "00";
  msec = "00";
  minHeading.innerHTML = min;
  secHeading.innerHTML = sec;
  msecHeading.innerHTML = msec;
  stop();
}
