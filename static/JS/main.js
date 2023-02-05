var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
    AOS.init({
      duration: 1000,
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var trigger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.overlay'),
        isClosed = false;

    trigger.addEventListener("click", function () {
        hamburger_cross();
    });

    function hamburger_cross() {
        if (isClosed == true) {
            overlay.style.display = "none";
            trigger.classList.remove("is-open");
            trigger.classList.add("is-closed");
            isClosed = false;
        } else {
            overlay.style.display = "block";
            trigger.classList.remove("is-closed");
            trigger.classList.add("is-open");
            isClosed = true;
        }
    }
    var data_toggle = document.querySelector('[data-toggle="offcanvas"]');
    data_toggle.addEventListener("click", function () {
        var wrapper = document.querySelector('#wrapper');
        wrapper.classList.toggle("toggled");
    });
});

// open and close nav
document.getElementById("navbar-toggle").addEventListener("click", function() {
    document.querySelector("nav ul").style.display = (document.querySelector("nav ul").style.display === "block") ? "none" : "block";
  });
  
  // Hamburger toggle
  document.getElementById("navbar-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
  });
  
  // If a link has a dropdown, add sub menu toggle.
  var links = document.querySelectorAll("nav ul li a:not(:only-child)");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
      var dropdown = this.nextElementSibling;
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
  
      // Close dropdown when select another dropdown
      var dropdowns = document.querySelectorAll('.navbar-dropdown');
      for (var j = 0; j < dropdowns.length; j++) {
        if (dropdowns[j] !== dropdown) {
          dropdowns[j].style.display = "none";
        }
      }
      e.stopPropagation();
    });
  }
  
  // Click outside the dropdown will remove the dropdown class
  document.querySelector("html").addEventListener("click", function() {
    var dropdowns = document.querySelectorAll('.navbar-dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  });
  
  document.getElementById("signinbtn").addEventListener("click", function() {
    window.location.href = "/signin";
  });
  document.getElementById("loginbtn").addEventListener("click", function() {
    window.location.href = "/login";
  });
  document.getElementById("logoclick").addEventListener("click", function() {
    window.location.href = "/";
  });
  document.getElementById("statusbtn").addEventListener("click", function() {
    window.location.href = "/status";
  });
  document.getElementById("adminbtn").addEventListener("click", function() {
    window.location.href = "/admin";
  });
  