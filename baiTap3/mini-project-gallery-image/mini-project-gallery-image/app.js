let imageContainer = document.querySelectorAll(".img-container");
let modelView = document.querySelector(".modal_new");
let srcImage = document.querySelector(".full-img");

for (var i = 0; i < imageContainer.length; i++) {
  imageContainer[i].addEventListener("click", function (e) {
    let alt = this.children[0].alt;
    modelView.classList.add("open");
    srcImage.src = "img/full/" + alt + ".jpg";
  });
}

modelView.addEventListener("click", function (e) {
  // e.preventDefault();
  this.classList.remove("open");
});

srcImage.onclick = function (e) {
  e.stopPropagation();
};

/**
 * Bài làm thêm
 */

let nav_menu = document.querySelector(".navbar-nav");
let childrenNav = nav_menu.querySelectorAll(".nav-link");

// console.log(childrenNav);
let navMain = document.querySelector(".navbar");

childrenNav.forEach((element) => {
  element.onclick = function (e) {
    e.preventDefault();

    // menu bám vào
    navMain.style.position = "fixed";
    navMain.style.left = "0";
    navMain.style.right = "0";
    navMain.style.top = "0";
    setTimeout(() => {
      navMain.style.top = "-40px";
      navMain.style.backgroundColor = "transparent";
    })

    let id_section = this.getAttribute("data-id");
    let getsection = document.querySelector("#" + id_section);
    getsection.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  };
});

/**
 * hiện thị lại menu khi scroll tới đầu
 */
window.onscroll = function(event) {
  let pageX = pageYOffset;
  if(pageX == 0){
    navMain.style.position = "unset";
    navMain.style.backgroundColor = "black";
  }
};

/**
 * js chuyển đổi màu
 */

function changeCustom() {
  let rangeCustom = document.querySelectorAll("input[type='range']");
  rangeCustom.forEach(element => {
    element.addEventListener("change", (event) => {
      let c1 = document.querySelector("#color_1").value;
      let c2 = document.querySelector("#color_2").value;
      let c3 = document.querySelector("#color_3").value;
      addColor(c1,c2,c3);
    })
  });
}
changeCustom();

function getNumberRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function changeRandom(){
  let btnRandom = document.querySelector(".btn_change_random");
  btnRandom.addEventListener("click", e => {
    let c1= Math.round(getNumberRandom(0, 255));
    let c2= Math.round(getNumberRandom(0, 255));
    let c3= Math.round(getNumberRandom(0, 255));

    document.querySelector("#color_1").value = c1;
    document.querySelector("#color_2").value = c2;
    document.querySelector("#color_3").value = c3;

    addColor(c1,c2,c3);
  });
}

changeRandom();

function addColor(c1 =0 , c2 =0, c3 =0) {
  let box_color = document.querySelector(".box_show_color");
  let text = document.querySelector(".text_color");
  box_color.style.backgroundColor = "rgb("+c1+","+c2+","+c3+")";
  text.style.color = "rgb("+c1+","+c2+","+c3+")";
}