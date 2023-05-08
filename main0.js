document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      if (!dropdowns[i].contains(event.target)) {
        dropdowns[i].classList.remove("active");
      }
    }
  
    if (event.target.closest(".dropdown")) {
      const dropdown = event.target.closest(".dropdown");
      dropdown.classList.toggle("active");
    }
  });