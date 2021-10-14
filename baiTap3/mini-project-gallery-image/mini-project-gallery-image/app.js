let image = document.querySelectorAll(".img-container img");
let imageContainer = document.querySelectorAll(".img-container");
let modelView = document.querySelector(".modal");
let srcImage = document.querySelector(".full-img");


for (var i = 0; i < image.length; i++) {
  imageContainer[i].addEventListener("click", function (e) {
      let alt = this.children[0].alt;
      modelView.classList.add("open");
      srcImage.src = "img/full/"+alt+".jpg";
  });
}

modelView.addEventListener("click", function (e) {
    this.classList.remove("open");
})