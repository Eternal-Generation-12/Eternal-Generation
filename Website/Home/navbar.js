window.onscroll = function () {
    var navbar = document.getElementById("navbar");

    if (window.innerWidth > 768) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    } else {
      navbar.classList.remove("scrolled");
    }
  };

window.onscroll = function () {
    var menuIcon = document.getElementsByClassName("menu-icon");

    if (window.innerWidth < 768) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menuIcon.classList.add("scrolled");
      } else {
        menuIcon.classList.remove("scrolled");
      }
    } else {
      menuIcon.classList.remove("scrolled");
    }
  };
  
  function toggleSidebar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }
  
  function addElementForMobile() {
    if (window.innerWidth < 768) {
      const newElement = document.createElement("div");
      newElement.className = "mobile-only"; 
      newElement.innerHTML = `<li><a href="">lorem ip</a></li>`;
  
      const navbar = document.getElementById("navbar");
      navbar.appendChild(newElement);
    }
  }
  
  window.onload = addElementForMobile;
  
  window.addEventListener("resize", function () {
    const existingElement = document.querySelector(".mobile-only");
    if (window.innerWidth < 768 && !existingElement) {
      addElementForMobile();
    } else if (window.innerWidth >= 768 && existingElement) {
      existingElement.remove();
    }
  });
  