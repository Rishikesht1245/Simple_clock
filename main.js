let time  = document.getElementById('time');

let showTime = ()=>{
      let date = new Date();
      let hour = date.getHours()<10 ? ('0'+date.getHours()) : date.getHours();
      let minute = date.getMinutes()<10 ? ('0'+date.getMinutes()) : date.getMinutes();
      let second = date.getSeconds()<10 ? ('0'+date.getSeconds()) : date.getSeconds();
      time.innerText = hour+':'+minute+':'+second;
}

setInterval(showTime,1000);