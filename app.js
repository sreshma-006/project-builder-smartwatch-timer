// displaying time in heading part

function displayTime() {
    var currTime = new Date();
    var h = currTime.getHours();
    var m = currTime.getMinutes();
  
    if (h == 24) {
      h = 0;
    } else if (h > 12) {
      h = h - 0;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
  
    var headTimeShow = document.getElementById("headTime");
    headTimeShow.innerHTML = h + ":" + m;
  }
  displayTime();
  
  
  
  //
  //
  // sms part
   document.querySelector("#msg").onclick = function () {
      // selecting body area of smartwatch
      var mainContent = document.querySelector("#main");
      // removing content from body area of smart watch
      mainContent.innerHTML = "";
      // creating a div tag to assign texts
      var msgContainer = document.createElement("div");
      // giving id to the div
      msgContainer.id = "msg-cont";
      msgContainer.innerHTML = `
         <div id="java" onclick="showText('java')">Java</div>
        <div id="html" onclick="showText('html')">Html</div>
        <div id="css" onclick="showText('css')">css</div>`;
      // appending the message container to the main content
      mainContent.appendChild(msgContainer);
    };
    
    // defining function to display whole text on clicking a text
    function showText(data) {
      var msgBox = document.querySelector("#msg-cont");
      msgBox.innerHTML = "";
      var msg = document.createElement("p");
      msg.id = "text";
      switch (data) {
        case "java":
          msg.innerHTML =
            "Java is a high level, robust, object-oriented and secure programming language.";
          break;
        case "html":
          msg.innerHTML =
            " HTML stands for hypertext markup language and it is used to create pages which are rendered over the web.";
          break;
        case "css":
          msg.innerHTML =
            "CSS stands for Cascading Style Sheets used to design a document written in markup language. ";
          break;
      }
    
      // appending the message to the text container
      msgBox.appendChild(msg);
    }
  
  
  
  //
  //
  // function for stop watch
  document.querySelector("#clock").onclick = function () {
    var mainContent = document.querySelector("#main");
    mainContent.innerHTML = "";
    var clockContent = document.createElement("div");
    clockContent.id = "clock-item";
    clockContent.innerHTML = `
      
      <h1 class="timer">
          <span id="min">00</span>
          <span id="sec">00</span>
          <span id="m-sec">00</span>
      </h1>
      <div id="clock-icons">
          <a id="reset-btn"><i class="fa fa-refresh" aria-hidden="true"></i></a>
          <a id="stop-btn"><i class="fa fa-pause" aria-hidden="true"></i></a>
          <a id="start-btn"><i class="fas fa-square-full"></i></a>
        </div>
      `;
    mainContent.appendChild(clockContent);
  
    let count = 0;
    let minutes = 0;
    let seconds = 0;
    let interval = 0;
    let milliseconds = 0;
    let timerRunning = false;
  
    let startTimer = () => {
      count++;
      minutes = Math.floor(count / 100 / 60);
      seconds = Math.floor(count / 100 - minutes * 60);
      milliseconds = Math.floor(count - seconds * 100 - minutes * 6000);
  
      document.querySelector("#min").innerText = loadingzero(minutes);
      document.querySelector("#sec").innerText = loadingzero(seconds);
      document.querySelector("#m-sec").innerText = loadingzero(milliseconds);
    };
  
    // when clicking start button
  
    let startBtn = document.querySelector("#start-btn");
    startBtn.addEventListener("click", function () {
      if (!timerRunning) {
        interval = setInterval(startTimer, 10); // start the timer
        timerRunning = true;
      }
    });
  
    // when clicking stop button
    let stoptBtn = document.querySelector("#stop-btn");
    stoptBtn.addEventListener("click", function () {
      clearInterval(interval);
    });
  
    // when clicking reset button
  
    let resetBtn = document.querySelector("#reset-btn");
    resetBtn.addEventListener("click", function () {
      clearInterval(interval);
       count = 0;
       minutes = 0;
       seconds = 0;
       interval = 0;
       milliseconds = 0;
       timerRunning = false;
  
      document.querySelector("#min").innerText = "00";
      document.querySelector("#sec").innerText = "00";
      document.querySelector("#m-sec").innerText = "00";
    });
  
    // loading zero
  
    let loadingzero = (time) => {
      if (time <= 9) {
        return "0" + time;
      } else {
        return time;
      }
    };
  };
  
  
  
  //
  //
  // fubction to show time when page load
  
  var mainContent = document.querySelector("#main");
  mainContent.innerHTML = `
    <h2 class="t2" id="t2"></h2>
    <p class="day" id="day"></p>
    <p class="date" id="date"></p>
    `;
  function renderTime() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    if (year < 1000) {
      year += 1900;
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var monthArr = new Array(
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    );
    var dayArr = new Array(
      "Sunday",
      "Monday",
      "wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
  
    // Time
    var currTime = new Date();
    var h = currTime.getHours();
    var m = currTime.getMinutes();
    var s = currTime.getSeconds();
  
    if (h == 24) {
      h = 0;
    } else if (h > 12) {
      h = h - 0;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
  
    var showtime = document.getElementById("t2");
    showtime.innerHTML = h + ":" + m + ":" + s;
  
    var showday = document.getElementById("day");
    showday.innerHTML = "" + dayArr[day] + "";
  
    var showdate = document.getElementById("date");
    showdate.innerHTML = daym + " " + "" + monthArr[month] + " " + "" + year;
  
    setTimeout("renderTime()", 1000);
  }
  
  window.onload = () => {
    renderTime();
  };