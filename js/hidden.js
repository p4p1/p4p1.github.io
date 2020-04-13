/*
 * Javascript file for keyboard events :)
 */

function getDarkcookie() {
  var allcookies = document.cookie;
  var cookieArray = allcookies.split(';');

  for (var i = 0; i < cookieArray.length; i++) {
    if (cookieArray[i].split('=')[0] == "dark") {
      return (Number(cookieArray[i].split('=')[1]));
    }
  }
  document.cookie+="dark=0";
  console.log(document.cookie);
  return (0);
}

document.addEventListener('keypress', logKey);
let dark = getDarkcookie();
console.log(dark);
var h1Elements = document.getElementsByTagName("h1");
var h2Elements = document.getElementsByTagName("h2");
var h3Elements = document.getElementsByTagName("h3");
var h4Elements = document.getElementsByTagName("h4");
var hrElements = document.getElementsByTagName("hr");
if (dark == 1) {
    document.body.style.backgroundColor = "#353333"
    document.body.style.color = "#FFFFFF"
    for(var i = 0; i < h1Elements.length; i++) {
         h1Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h2Elements.length; i++) {
         h2Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h3Elements.length; i++) {
         h3Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h4Elements.length; i++) {
         h4Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < hrElements.length; i++) {
         hrElements[i].style.borderTop = "1px solid rgba(255, 255, 255, 0.1)";
    }
}

function logKey(e) {

    if (e.key === 'b') {
      if (dark == 0) {
        document.getElementById("toggleshade").checked = true;
        document.cookie = "dark=1";
        document.body.style.backgroundColor = "#353333"
        document.body.style.color = "#FFFFFF"
        for(var i = 0; i < h1Elements.length; i++) {
             h1Elements[i].style.color = "#fff";
        }
        for(var i = 0; i < h2Elements.length; i++) {
             h2Elements[i].style.color = "#fff";
        }
        for(var i = 0; i < h3Elements.length; i++) {
             h3Elements[i].style.color = "#fff";
        }
        for(var i = 0; i < h4Elements.length; i++) {
             h4Elements[i].style.color = "#fff";
        }
        for(var i = 0; i < hrElements.length; i++) {
             hrElements[i].style.borderTop = "1px solid rgba(255, 255, 255, 0.1)";
        }
        dark = 1;
      } else {
        document.getElementById("toggleshade").checked = false;
        document.cookie = "dark=0";
        dark = 0;
        document.body.style.backgroundColor = "#FFFFFF"
        document.body.style.color = "#868e96"
        for(var i = 0; i < h1Elements.length; i++) {
             h1Elements[i].style.color = "#343a40";
        }
        for(var i = 0; i < h2Elements.length; i++) {
             h2Elements[i].style.color = "#343a40";
        }
        for(var i = 0; i < h3Elements.length; i++) {
             h3Elements[i].style.color = "#343a40";
        }
        for(var i = 0; i < h4Elements.length; i++) {
             h4Elements[i].style.color = "#343a40";
        }
        for(var i = 0; i < hrElements.length; i++) {
             hrElements[i].style.borderTop = "1px solid rgba(0,0,0,0.1)";
        }
      }
    }
}
function shade() {

  if (dark == 0) {
    document.cookie = "dark=1";
    document.body.style.backgroundColor = "#353333"
    document.body.style.color = "#FFFFFF"
    for(var i = 0; i < h1Elements.length; i++) {
         h1Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h2Elements.length; i++) {
         h2Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h3Elements.length; i++) {
         h3Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h4Elements.length; i++) {
         h4Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < hrElements.length; i++) {
         hrElements[i].style.borderTop = "1px solid rgba(255, 255, 255, 0.1)";
    }
    dark = 1;
  } else {
    document.cookie = "dark=0";
    dark = 0;
    document.body.style.backgroundColor = "#FFFFFF"
    document.body.style.color = "#868e96"
    for(var i = 0; i < h1Elements.length; i++) {
         h1Elements[i].style.color = "#343a40";
    }
    for(var i = 0; i < h2Elements.length; i++) {
         h2Elements[i].style.color = "#343a40";
    }
    for(var i = 0; i < h3Elements.length; i++) {
         h3Elements[i].style.color = "#343a40";
    }
    for(var i = 0; i < h4Elements.length; i++) {
         h4Elements[i].style.color = "#343a40";
    }
    for(var i = 0; i < hrElements.length; i++) {
         hrElements[i].style.borderTop = "1px solid rgba(0,0,0,0.1)";
    }
  }
}
