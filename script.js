// const toggleBtn = document.getElementById("toggle-theme");

// toggleBtn.addEventListener("click",function(){
//     document.body.classList.toggle("dark-mode");
// });


//to remember the theme after referesh 
// const toggleBtn = document.getElementById("toggle-theme");
// const savedTheme = localStorage.getItem("theme");

// if (savedTheme === "dark") {
//   document.body.classList.add("dark-mode");
// }

// toggleBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");

//   if (document.body.classList.contains("dark-mode")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });

//to add an alert that the theme is changed 

const toggleBtn = document.getElementById("toggle-theme");
const savedTheme = localStorage.getItem("theme");

// Apply saved theme on load
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Toast function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Single toggle listener
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);

  showToast("Theme Toggled!");
});
