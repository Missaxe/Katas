var emailRegex = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;

function validate() {
   var txtEmail = document.getElementById("mce-EMAIL");
   var isValid = emailRegex.test(txtEmail.value);

   if (!isValid)
   {
      txtEmail.style.borderColor = "red";
   }

} 

function domReady(fn) {
   if (document.readyState === "complete"
      || (document.readyState !== "loading" && !document.documentElement.doScroll)
   ) {
      fn();
   } else {
      document.addEventListener("DOMContentLoaded", fn)
   }
}

function pad(num, size) {
   var s = num + "";
   while (s.length < size) s = "0" + s;
   return s;
}

var isPaused;
function countdown(){
   var btnCountdown = document.getElementById("btnCountdown");
   if (isPaused){      
      btnCountdown.textContent = "Pause Countdown";
      resumeCountdown();
   }
   else{
      btnCountdown.textContent = "Resume Countdown";
      pauseCountdown();
   }

}

function pauseCountdown() {
   isPaused = true;
}

function resumeCountdown() {
   isPaused = false;
}

function startCountdown() {
   isPaused = false;
   var today = new Date();
   var endDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate() + 15);

   var endDateTicks = endDate.getTime();

   var x = setInterval(function () {
      if (!isPaused) {
         today = new Date();
         var todayTicks = today.getTime();
         var distance = endDateTicks - todayTicks;

         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

         var timer = document.querySelector('#time');

         timer.innerHTML = '<div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-days"><div class="lu-square"><span>'
            + pad(days, 2)
            + '</span><span>Days</span></div></div><div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-hours"><div class="lu-square"><span>'
            + pad(hours, 2)
            + '</span><span>Hours</span></div></div><div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-minutes"><div class="lu-square"><span>'
            + pad(minutes, 2)
            + '</span><span>Minutes</span></div></div><div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-seconds"><div class="lu-square"><span>'
            + pad(seconds, 2)
            + '</span><span>Seconds</span></div></div>'

         if (distance < 0) {
            clearInterval(x);
            timer.innerHTML = "LAUNCHED";
         }
      }
   }, 1000);
}

domReady(function () {
   startCountdown();
});
