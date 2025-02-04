document.querySelectorAll(".selection-item").forEach(item =>{
    item.addEventListener("click", function(){
        let index = Array.from(document.querySelectorAll(".selection-item")).indexOf(this);
        document.querySelectorAll(".features-card").forEach(f =>{
            f.classList.remove("active");
            let feature = Array.from(document.querySelectorAll(".features-card"))[index];
            feature.classList.add("active");
        })
    })
})

document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", function(){
        let index = Array.from(document.querySelectorAll(".question")).indexOf(this);
        let answer = document.querySelectorAll(".answer")[index];
        let arrow = Array.from(document.querySelectorAll(".arrow"))[index];
        answer.classList.toggle("active");
        arrow.classList.toggle("rotated");
        this.classList.toggle("rotated");
    });
});

function toggleMenu() {
    document.querySelector(".mobile-nav").classList.toggle("mobile-active");
    document.querySelector(".header").classList.toggle("answer");

}