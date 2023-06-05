   //Beyond the Spiderverse

   // The data/time we want to countdown to
   let countDownDateSpiderVerse = new Date("Mar 29, 2024 00:00:00").getTime();

   // Run myfunc every second
   let myfunc = setInterval(function() {

   let now = new Date().getTime();
   let timeleft = countDownDateSpiderVerse - now;
       
   // Calculating the days, hours, minutes and seconds left
   let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
   let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
       
   // Result is output to the specific element
   document.getElementById("days").innerHTML = days
   document.getElementById("hours").innerHTML = hours 
   document.getElementById("mins").innerHTML = minutes 
   document.getElementById("secs").innerHTML = seconds
       
   // Display the message when countdown is over
   if (timeleft < 0) {
       clearInterval(myfunc);
       document.getElementById("days").innerHTML = ""
       document.getElementById("hours").innerHTML = "" 
       document.getElementById("mins").innerHTML = ""
       document.getElementById("secs").innerHTML = ""
       document.getElementById("end").innerHTML = "TODAY IS THE DAY!!";
   }
   }, 1000);

   //FF XVI
      // The data/time we want to countdown to
      let countDownDateFFXVI = new Date("Jun 22, 2023 00:00:00").getTime();

      // Run myfunc every second
      let myfuncFF = setInterval(function() {
   
      let now = new Date().getTime();
      let timeleft = countDownDateFFXVI - now;
          
      // Calculating the days, hours, minutes and seconds left
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
          
      // Result is output to the specific element
      document.getElementById("daysFF").innerHTML = days
      document.getElementById("hoursFF").innerHTML = hours 
      document.getElementById("minsFF").innerHTML = minutes 
      document.getElementById("secsFF").innerHTML = seconds
          
      // Display the message when countdown is over
      if (timeleft < 0) {
          clearInterval(myfuncFF);
          document.getElementById("daysFF").innerHTML = ""
          document.getElementById("hoursFF").innerHTML = "" 
          document.getElementById("minsFF").innerHTML = ""
          document.getElementById("secsFF").innerHTML = ""
          document.getElementById("end").innerHTML = "TODAY IS THE DAY!!";
      }
      }, 1000);