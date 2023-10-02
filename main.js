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
        //chaks not one click 
        if(bo.getAttribute("id") !== "active"){
            e.currentTarget.classList.add(`active`);
            //Resaet All Elemants id => ""
            boxEle.forEach((b) => {
                b.setAttribute("id", "") ;
            });
            //This Elemant Resaet id => "active"
            bo.setAttribute("id", "active");
        } else{ //Resaet This Elemant id => ""
            bo.setAttribute("id", "") ;
        };
    });
});

//Boxs in My business 
let boEle = document.querySelectorAll(".boxs");

boEle.forEach((bo) => {
    bo.addEventListener("click", (e) => {
        boEle.forEach((b) => {
            b.classList.remove("active");
        });
        //chaks not one click 
        if(bo.getAttribute("id") !== "active"){
            e.currentTarget.classList.add(`active`);
            //Resaet All Elemants id => ""
            boEle.forEach((b) => {
                b.setAttribute("id", "") ;
            });
            //This Elemant Resaet id => "active"
            bo.setAttribute("id", "active");
        } else{ //Resaet This Elemant id => ""
            bo.setAttribute("id", "") ;
        };
    });
});