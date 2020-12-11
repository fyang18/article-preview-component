function showHide(){
    var cardShow = document.getElementById("cardShow");
    var shareShow = document.getElementById("shareShow");

    if ( window.screen.width < 768 && cardShow.style.display !== "none" ) {
        cardShow.style.display = "none";
        shareShow.style.display = "flex";

    } else if (window.screen.width >= 768 && cardShow.style.display !== "none" && shareShow.style.display == "none"){
        shareShow.style.display = "flex";
    } else if (window.screen.width >= 768 && shareShow.style.display !== "none" && cardShow.style.display !== "none"){
        shareShow.style.display = "none";
    } else {
        cardShow.style.display = "flex";
        shareShow.style.display = "none";
    }
}
