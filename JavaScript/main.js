
function hamburgerMenu(){
    var leftMenu = document.getElementById("navbar-moblie");
    var overlay = document.getElementById("overlay");
    if (leftMenu.style.width ==='60vw' && overlay.style.display === "block")
    {
        leftMenu.style.width = '0';
        overlay.style.display = "none";
        document.getElementsByTagName('body')[0].style.position = 'unset';
    }
    else
    {
        leftMenu.style.width = '60vw';
        overlay.style.display = 'block';
        document.getElementsByTagName('body')[0].style.position = 'fixed';
    }
    
}
function off() {
    document.getElementById("navbar-moblie").style.width = '0';
    document.getElementById("overlay").style.display = "none";
    document.getElementById("check").checked = false;
    document.getElementsByTagName('body')[0].style.position = 'unset';
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(document.documentElement.scrollTop || document.body.scrollTop);
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-desktop").style.top = "0";
  } else if(prevScrollpos + 20 < currentScrollPos )
  {
    document.getElementById("navbar-desktop").style.top = "-5em";
  }
  prevScrollpos = currentScrollPos;
}

