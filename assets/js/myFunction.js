function myFunction()
{
    alert("Congratulations! Robo-Advisory University has colllected your preference.\n\nMove forward to next part to see our selection for you!")
}

var fgImage = null;
function loadForegroundImage(){
  var imgFile = document.getElementById("fgfile");
  var canvas = document.getElementById("fgcan");
  fgImage.drawTo(canvas);
}

function WindowOnlοad() {
  var obt=document.getElementById("bt");
  var odiv=document.getElementById("special1");
    if(odiv.style.display=="none"){
      odiv.style.display="block";
    }
    else{
      odiv.style.display="none";
    }
}

function SendEmail() {
  alert("Email Sent!")
}

function AddCalendar() {
  alert("Calendar Added!")
}