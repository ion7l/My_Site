// links toggle-menu

let butLin = document.querySelector(".toggle-menu");
let ul = document.querySelector(".ul");
let butClo = document.querySelector(".fa-xmark");

butLin.onclick = function () {
    ul.style.display = "flex";
    this.style.display = "none";
    butClo.style.display = "block";
};

butClo.onclick = function () {
    ul.style.display = "none";
    butLin.style.display = "block";
    this.style.display = "none";
}

//Skills animashen 

let boxEle = document.querySelectorAll(".box");

boxEle.forEach((bo) => {
    bo.addEventListener("click", (e) => {
        boxEle.forEach((b) => {
            b.classList.remove("active");
        });
        e.currentTarget.classList.add(`active`);
    });
});