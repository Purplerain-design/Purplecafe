let theme_btn = document.getElementById("theme");
let close_btn = document.getElementById("close");
let panelcard = document.getElementsByClassName("wholecard")[0];

theme_btn.addEventListener("click", function(){
    document.body.classList.add("sidepanel_card");
});
close_btn.addEventListener("click", function(){
    document.body.classList.remove("sidepanel_card");
})
    