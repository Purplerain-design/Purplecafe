let theme_btn = document.getElementById("theme");
let close_btn2 = document.getElementById("close");
let wholecard = document.querySelector(".wholecard");
let palette_btns = document.querySelectorAll(".theme_selector");

// make card popup on the side
if(theme_btn && wholecard){
    theme_btn.addEventListener("click", function(){
    wholecard.classList.add("active");
    document.body.classList.add("active");
});
}
if(close_btn2 && wholecard){
    close_btn2.addEventListener("click", function(){
    wholecard.classList.remove("active");
    document.body.classList.remove("active");
});
}

// save theme even after page refresh
let savedTheme = localStorage.getItem("theme");
if(savedTheme){
    document.documentElement.setAttribute("data-theme", savedTheme);

    palette_btns.forEach(btn => {
        if(btn.dataset.theme === savedTheme){
            btn.classList.add("active");
        }

    });
}


// make the tick appear on active palette btn
// make picked color palette apply on the entire website
palette_btns.forEach(current_btn => {
    
    current_btn.addEventListener("click", function(){

        const selectedTheme = current_btn.dataset.theme;
        document.documentElement.setAttribute("data-theme", selectedTheme);

        localStorage.setItem("theme", selectedTheme);//save theme

        palette_btns.forEach(btn => btn.classList.remove("active"));
        current_btn.classList.add("active");

    });

});
    

    