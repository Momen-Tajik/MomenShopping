var navBtn=document.getElementById("mobileNavbarBtn");
var desktobNav=document.getElementById("desktopnavbar");

navBtn.addEventListener("click", () => {
    desktobNav.style.display="flex";
    desktobNav.style.flexDirection="column"
});

