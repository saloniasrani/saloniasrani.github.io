function toggleDropdown() {
  let navbarToggle = document.getElementById("navbar-toggle");
  if (navbarToggle.className === "topnav") {
    navbarToggle.className += " responsive";
  } else {
    navbarToggle.className = "topnav";
  }
}

// document.getElementById("navbar-toggle").addEventListener(
//   "click",
//   (e) => {
//     if (e.target.id) {
//       window.location.href = e.target.id + ".html";
//     }
//     e.stopPropagation();
//   },
//   true
// );
