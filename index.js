document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.innerHTML = navMenu.classList.contains("active") 
      ? '<i class="fas fa-times"></i>'  
      : '<i class="fas fa-bars"></i>'; 
  });
});
