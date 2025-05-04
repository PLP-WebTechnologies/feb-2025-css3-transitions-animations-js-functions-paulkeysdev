//  Toggle Dark Mode & Store in Local Storage
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply Saved Theme on Load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Trigger Animation for Box
document.getElementById("animateBtn").addEventListener("click", function () {
    let box = document.getElementById("animatedBox");
    box.style.opacity = "1"; 
    box.style.transform = "scale(1.1)"; 
});
// Trigger Animation for Box
document.getElementById("animateBtn").addEventListener("click", function () {
    let box = document.getElementById("animatedBox");
    box.style.animation = "fadeZoom 1s ease forwards"; 
});

