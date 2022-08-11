const welcome_image = document.getElementById("welcome-fig-img");

if (welcome_image.className === "desktop") {
    welcome_image.src = "Assets/Hero Image (Desktop View).png";
}  else if (welcome_image.className === "tablet") {
    welcome_image.src = "Assets/Hero Image (Tablet View).png";
}