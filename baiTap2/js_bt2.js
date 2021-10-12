// check isNumber
function isNumber(n) {
  let reg = /^-?[\d.]+(?:e-?\d+)?$/;
  if (reg.test(n) && typeof n === "number") {
    return true;
  }
  return false;
}

// bài 1: Viết hàm với tham số đầu vào là 1 số bất kỳ, kiểm tra và in ra màn hình là số chẵn hay lẽ.

function checkParity(number) {
  let result = false;
  if (isNumber(number)) {
    if (number % 2 == 0) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = "Không phải số";
  }
  return result;
}

// bài 1.2: kiểm tra thêm số đó là số âm hay dương

function checkNegativePositive(number) {
  let result = "";
  if (number < 0) {
    if (checkParity(number)) {
      result = "số âm và chẵn";
    } else if (checkParity(number) == false) {
      result = "Số âm và lẽ";
    }
  } else if (number == 0) {
    result = "không không âm không dương";
  } else if (number > 0) {
    if (checkParity(number)) {
      result = "số dương và chẵn";
    } else if (checkParity(number) == false) {
      result = "Số dương và lẽ";
    }
  }
  return result;
}

//bài 2: Viết hàm với tham số đầu vào là 1 số trong tháng (1 tới 12), kiểm tra và in ra tháng đó có bao nhiều ngày?
function checkMonth(month) {
  let result = "";
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = "Tháng " + month + " có 31 ngày";
      break;
    case 2:
      result = "Tháng " + month + " có 28 hoặc 29 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result = "Tháng " + month + " có 30 ngày";
      break;
  }
  return result;
}

// bài 3: Viết hàm với đầu vào là 1 số bất kỳ, kiểm tra số đó và in ra là số nguyên dương hay số nguyên âm, nếu không phải cả 2 thì in ra không phải số cần kiểm tra.
function checkInteger(number) {
  let result = "";
  if (Number.isInteger(number)) {
    if (number < 0) {
      result = "Số nguyên âm";
    } else if (number > 0) {
      result = "Số nguyên dương";
    } else {
      result = "Không phải số cần kiểm tra";
    }
  } else {
    result = "Không phải số nguyên";
  }
  return result;
}

// bài 4: Viết hàm tính tổng 2 số với tất cả các phép tính (+ - * / %) thông qua tham số truyền vào

function pussNumber(...args) {
  let result = "";
  if (args.length == 3) {
    if (isNumber(args[0]) && isNumber(args[1])) {
      switch (args[args.length - 1]) {
        case "+":
          result = args[0] + args[1];
          break;
        case "-":
          result = args[0] - args[1];
          break;
        case "*":
          result = args[0] * args[1];
          break;
        case "/":
          result = args[0] / args[1];
          break;
        case "%":
          result = args[0] % args[1];
          break;
        default:
          result = " Phép tính sai ";
          break;
      }
    } else {
      result = "Không phải số";
    }
  } else {
    result = "Hãy nhập 3 tham số";
  }

  return result;
}
