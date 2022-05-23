
// open popup with my phone number on it
function myFunction() {
  alert("My phone number is: 858-705-7691");
}

// open dropdown menu
function navDropdownMenu() {
  let dropdown = document.getElementById("menuDropdown");
  dropdown.style.display = (dropdown.style.display == "flex") ? "none" : "flex";
}

// menu buttons
var hashScroll = {
    init : function(){

       var header = document.getElementById('header');
       this.fixedHeight = header.getBoundingClientRect().height;
    },

    onHashChange : function(){
      var section = window.location.hash.slice(1), // hash is #SectionName
          match = document.getElementById(section),
          rect, anchorOffset;

        if (match){
            rect = match.getBoundingClientRect();
            anchorOffset = window.pageYOffset + rect.top - this.fixedHeight; //this.getFixedOffset();
            window.scrollTo(window.pageXOffset, anchorOffset);

        }
    }
};

//nav changes on scroll down
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("h1").style.fontSize = "45px";
    //document.getElementById("h1").style.textAlign = "left";
  } else {
    document.getElementById("h1").style.fontSize = "50px";
    //document.getElementById("h1").style.textAlign = "center";
  }
}

//slide horizontal projects 
window.onload = function(){
  var button = document.getElementById('rightbutton');
  button.onclick = function() {
    var boxes = document.getElementById('projectsul');
    sideScroll(boxes, 'right', 30, 350, 10); //calls the function made below
  };

  var back = document.getElementById('leftbutton');
  back.onclick = function() {
    var boxes = document.getElementById('projectsul');
    sideScroll(boxes, 'left', 30, 350, 10); //calls the function made below
  };
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function(){
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

