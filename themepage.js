let theme_btn = document.getElementById("theme");
let close_btn2 = document.getElementById("close");
let wholecard = document.querySelector(".wholecard");
let palette_btns = document.querySelectorAll(".theme_selector");

// make card popup on the side
theme_btn.addEventListener("click", function(){
    wholecard.classList.add("active");
    document.body.classList.add("active");
});
close_btn2.addEventListener("click", function(){
    wholecard.classList.remove("active");
    document.body.classList.remove("active")
})

// make the tick appear on active palette btn
palette_btns.forEach(current_btn => {
    
    current_btn.addEventListener("click", function(){
        palette_btns.forEach(btn => btn.classList.remove("active"));
        current_btn.classList.add("active");
        

    });

});
    

    