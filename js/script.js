var navBtn=document.getElementById("mobileNavbarBtn");
var desktobNav=document.getElementById("desktopnavbar");

navBtn.addEventListener("click", () => {
    if(desktobNav.style.display==="flex")
    {
        desktobNav.style.display="none";
    }
    else
    {
        desktobNav.style.display="flex";
        desktobNav.style.flexDirection="column";
    }
});

