function isNumber(n) {
  let reg = /^-?[\d.]+(?:e-?\d+)?$/;
  if (reg.test(n) && typeof n === "number") {
    return true;
  }
  return false;
}

// bài 1: Tạo Array với các số bất kỳ, tính tổng các số trong array, in ra màn hình html
function arrBai1(...args) {
  let n = args.length - 1;
  let total = 0;

  for (let i = 0; i <= n; i++) {
    if (isNumber(args[i])) {
      total += args[i];
    } else {
      return "Chỉ dc nhập số";
    }
  }

  return "Tổng các số: " + total;
}

let text_1 = arrBai1(1, 2, 3, 4);

document.querySelector(".box_cau1 .text_1").innerHTML = text_1;

// bài 2 Tạo Array với các chuỗi string bất kỳ, lặp và in ra màn hình html tương ứng với mỗi thẻ <p>. Ví dụ: ['haha', 'hehe'] ->
{
  /* <p>haha</p> 
<p>hehe</p> */
}

function bai_2(...args) {
  let n = args.length - 1;
  let parentNode = document.querySelector("#list_bai_2");

  for (let i = 0; i < n; i++) {
    let node = document.createElement("li");
    let pnode = document.createElement("p");
    let textNode = document.createTextNode(args[i]);
    pnode.appendChild(textNode);
    node.appendChild(pnode);
    parentNode.appendChild(node);
  }
}
bai_2("hihi", "haha", "hoho", "hehe");

/**
 * Bài 2.2: Add thêm 1 thẻ <p> với text bất kỳ thêm vào ở đầu và ở cuối.
 */

function bai_2_2() {
  let inputText = document.getElementById("input_text");
  let btnDau = document.querySelector(".btn_them_dau");
  let btnCuoi = document.querySelector(".btn_them_cuoi");
  let parentNode = document.querySelector("#list_bai_2");

  btnDau.onclick = function (e) {
    let node = document.createElement("li");
    let pnode = document.createElement("p");
    let textNode = document.createTextNode(inputText.value);
    pnode.appendChild(textNode);
    node.appendChild(pnode);

    // console.log(node);
    let element_child = parentNode.children[0];

    parentNode.insertBefore(node, element_child);
  };

  btnCuoi.onclick = function (e) {
    let node = document.createElement("li");
    let pnode = document.createElement("p");
    let textNode = document.createTextNode(inputText.value);
    pnode.appendChild(textNode);
    node.appendChild(pnode);

    parentNode.appendChild(node);
  };
}

bai_2_2();

/**
 * bai 3: Tạo 1 button với sự kiện onclick, khi user bấm vào thì ẩn hiện text bất kỳ, thay đổi background của màn hình.
 */

function bai_3() {
  let btn_an_text = document.querySelector(".btn_an_text");
  let textAn = document.querySelector(".box_bai_3 .text_bai_3");
  let check = false;

  btn_an_text.onclick = function () {
    if (check) {
      textAn.style.display = "block";
      btn_an_text.innerHTML = "Ẩn text";
      document.body.style.backgroundColor = "white";
      check = false;
    } else {
      textAn.style.display = "none";
      btn_an_text.innerHTML = "Hiện text";
      document.body.style.backgroundColor = "yellow";
      check = true;
    }
  };
}

bai_3();

/**
 * Bài 3.2: Tạo thêm 1 button với text "Bảo trì" và sự kiện ondblclick, khi bấm vào thì ẩn hiện tất cả UI trên trang, show text "Page bảo trì".
 */
function bai_3_2() {
  let btn_bao_tri = document.querySelector(".btn_bao_tri");
  let an_di = document.querySelector(".an_di");
  let text_bao_tri = document.querySelector(".text_bao_tri");
  let check = false;

  btn_bao_tri.onclick = function () {
    if (check) {
        an_di.style.display = "block";
        text_bao_tri.innerHTML = " ";
      check = false;
    } else {
        an_di.style.display = "none";
        text_bao_tri.innerHTML = "Page bảo trì"
      check = true;
    }
  };
}

bai_3_2();
