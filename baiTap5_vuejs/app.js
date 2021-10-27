const appNew = Vue.createApp({
  data() {
    return {
      isOpenClass: false,
      imageModalShow: "",
      // isClickShow : false,
      isAddOpenClass: false,

      imageBoxs: [
        {
          imageIndex: "img/small/pexels-anna-shvets-4588065.jpg",
          imageAlt: "1",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-anthony-139639.jpg",
          imageAlt: "2",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-burst-374825.jpg",
          imageAlt: "3",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-carlos-spitzer-17811.jpg",
          imageAlt: "4",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-charles-1851164.jpg",
          imageAlt: "5",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-frans-van-heerden-631292.jpg",
          imageAlt: "6",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-gratisography-4602.jpg",
          imageAlt: "7",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-jan-kopřiva-3614358.jpg",
          imageAlt: "8",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-jeremy-bishop-2422915.jpg",
          imageAlt: "9",
          isClick: false,
        },
        {
          imageIndex: "img/small/pexels-jim-long-949859.jpg",
          imageAlt: "10",
          isClick: false,
        },
      ],

      navBoxs: [
        {
          sectionName: "sectionGallery",
          nameView: "Gallery",
        },
        {
          sectionName: "sectionBooks",
          nameView: "Books",
        },
        {
          sectionName: "sectionStudents",
          nameView: "Students",
        },
        {
          sectionName: "sectionColors",
          nameView: "Colors",
        },
      ],
      color1: 0,
      color2: 0,
      color3: 0,
    };
  },
  methods: {
    isClickShow(imageAlt) {
      this.imageModalShow = `img/full/${imageAlt}.jpg`;
      this.isOpenClass = !this.isOpenClass;
    },
    closeModal(event) {
      // console.log();
      if (event.target.classList.contains("open")) {
        this.isOpenClass = !this.isOpenClass;
      }
    },
    scrollToElement(event) {
      //
    },
    changeCustom(event) {
      let id = event.target.id;
      let value = event.target.value;
      if (id == "color_1") {
        this.color1 = value;
      } else if (id == "color_2") {
        this.color2 = value;
      } else {
        this.color3 = value;
      }
    },
    randomColor() {
      let v1 = Math.round(getNumberRandom(0, 255));
      let v2 = Math.round(getNumberRandom(0, 255));
      let v3 = Math.round(getNumberRandom(0, 255));
      
      this.color1 = v1;
      this.color2 = v2;
      this.color3 = v3;
    },
  },
  computed: {
    addOpen() {
      return `${this.isOpenClass ? "open" : ""} `;
    },
    changeImage() {
      return `${this.imageModalShow}`;
    },
    changeColorShow() {
      return {
        backgroundColor: `rgb(${this.color1},${this.color2},${this.color3})`,
      };
    },
  },
});

let nodeApp = appNew.mount("#box_main");

function getNumberRandom(min, max) {
  return Math.random() * (max - min) + min;
}
