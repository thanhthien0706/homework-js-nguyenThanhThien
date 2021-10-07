/**
 * BÀI 1:
 */

// 5 tên biến đúng
let thanhThien;
let $thanhThien;
let _thanThien;
let thanhThien_01;
let thanhThien02;

// 5 tên biến sai
// let 01_thanhThien;
// let ThanhThien;
// let %ThanhThien;
// let %ThanhThien_01;
// let @thanhThien;

/**
 * BÀI 2:
 */
let a = 2;
let b = 5;

// toán tử +
let operator_1 =  a + b; // kết quả: 7

// toán tử -
let operator_2 =  a - b; // kết quả: -3

// toán tử *
let operator_3 =  a * b; // kết quả: 10

// toán tử /
let operator_4 =  a / b; // kết quả: 0.4

// toán tử %
let operator_5 =  a % b; // kết quả: 2


/**
 * BÀI 3;
 */

// Bài 3.1:
let x1 = 5;

let result_1 = ++x1 + x1++ - --x1 - x1--; // kết quả: 0;
/**
 * Giải thích:
 * + lần 1: ta có ++x1 khi đó x1 = 6,  result_1=6 sau đó x1 = 6;
 * + lần 2: Công thêm x1++ ta có ++x1 + x1++ khi đó x1++ = x1, result_1 = 6 + 6 = 12 sau đó tăng x1 = 7
 * + lần 3: Trừ cho --x1 ta có ++x1 + x1++ - --x1 khi đó --x1 = x1 -1 = 6,  result_1 = 6 + 6 - 6 = 6 ; sau đó x1 = 6;
 * + lần 4: Trừ cho x1-- ta có ++x1 + x1++ - --x1 - x1-- khi đó x1-- = x1, result_1 = 6 + 6 - 6 - 6 = 0 sau đó trừ x1 = 5;
 */

// bài tập 3.2:
let x2 = 6;
let y2 = 10;

let result_2 = ++y2 - y2++ + x2++ + x2-- - --x2 - --y2; // kết quả: -3
/**
 * + lần 1: ta có ++y2 = y2 +1 = 11 khi đó result_2 = 11 sau đó x2 = 6, y2= 11;
 * + lần 2: trừ y2++ ta có ++y2 - y2++ khi đó y2++ = y2 = 11, result_2 = 11 - 11= 0 sau đó  x2 = 6, tăng y2 = 12;
 * + lần 3: cộng x2++ ta có ++y2 - y2++ + x2++ khi đó x2++ = x2=6 , result_2 = 11 - 11 + 6 = 6 sau đó tăng x2 = 7 , y2 =12;
 * + lần 4: cộng x2-- ta có ++y2 - y2++ + x2++ + x2-- khi đó x2-- = x2=7 , result_2 = 11 - 11 + 6 + 7 = 13 sai đó trừ x2 = 6 , y2 = 12;
 * + lần 5: trừ --x2 ta có ++y2 - y2++ + x2++ + x2-- - --x2 khi đó --x2 = x2 -1 = 5 , result_2 = 11 - 11 + 6 + 7 - 5= 8 sau đó x2 = 5 , y2 = 12;
 * + lần 6: trừ --y2 ta có ++y2 - y2++ + x2++ + x2-- - --x2 - --y2khi đó --y2 = y2 -1 = 11 , result_2 = 11 - 11 + 6 + 7 - 5 - 11= -3 sau đó x2 = 5 , y2 = 11;
 * 
 */

// bài tập 3.3 phép tính 1

let x3 = 10; 
let y3 = 12; 
let z3 = 16;

// bài 3.3 phép tính 1
let result_3_1 = x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3 + --z3 + x3--;

/**
 * Giait thích:
 * +Lần 1: ta có x3++ = x3 khi đó result_3_1 = 10, sau đó tăng x3 = 11, y3 = 12, z3 = 16;
 * +Lần 2: cộng z3-- ta có x3++ + z3-- khi đó z3-- = z3 = 16, result_3_1 = 10 + 16 = 26 sau đó x3 = 11, y3 = 12, giảm z3 = 15;
 * +Lần 3: trừ --x3 ta có x3++ + z3-- - --x3 khi đó --x3 = x3 -1 = 10, result_3_1 = 10 + 16  - 10 = 16 sau đó x3 = 10, y3 = 12,z3 = 15;
 * +Lần 4: cộng --y3 ta có x3++ + z3-- - --x3 + --y3 khi đó --y3 = y3 -1 = 11, result_3_1 = 10 + 16  - 10 +11 = 27 sau đó x3 = 10, giảm y3 = 11,z3 = 15;
 * +Lần 5: trừ y3-- ta có x3++ + z3-- - --x3 + --y3 - y3-- khi đó y3-- = y3 = 11, result_3_1 = 10 + 16  - 10 +11 - 11= 16 sau đó x3 = 10, giảm y3 = 10, z3 = 15;
 * +Lần 6: trừ ++y3 ta có x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 
 *  khi đó ++y3 = y3 + 1 = 11, result_3_1 = 10 + 16  - 10 +11 - 11 + 11= 27 sau đó x3 = 10, tăng y3 = 11, z3 = 15;
 * +Lần 7: cộng ++z3 ta có x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3
 *  khi đó ++z3 = z3 + 1 = 16, result_3_1 = 10 + 16  - 10 +11 - 11 + 11 + 16= 43 sau đó x3 = 10, y3 = 11, tăng z3 = 16;
 * +Lần 8: cộng --z3 ta có x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3 + --z3
 *  khi đó --z3 = z3 - 1 = 15, result_3_1 = 10 + 16  - 10 +11 - 11 + 11 + 16 + 15= 58 sau đó x3 = 10, y3 = 11, giảm z3 = 15;
 * +Lần 9: cộng x3-- ta có x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3 + --z3 + x3--
 *  khi đó x3-- = x3 = 10, result_3_1 = 10 + 16  - 10 +11 - 11 + 11 + 16 + 15 + 10 = 68 sau đó giảm x3 = 9, y3 = 11, z3 = 15;
 */

// bài 3.3 phép tính 2
let result_3_2 = ++x3 - x3++ + z3++ + ++y3 - y3-- ;

/**
 * Giải thích:
 * + vì ta sử dụng lại các biến x3, y3, z3 nên các các biến sẽ có giá trị x3 = 9, y3 = 11, z3 = 15;
 * +Lần 1: ta có ++x3 = x3 + 1= 10 khi đó result_3_2 = 10, sau đó tăng x3 = 10, y3 = 11, z3 = 15;
 * +Lần 2: trừ x3++ ta có ++x3 - x3++ khi đó x3++ = x3 = 10, result_3_2 = 10 - 10 = 0 sau đó  tăng x3 = 11, y3 = 11, z3 = 15;
 * +Lần 3: Cộng z3++ ta có ++x3 - x3++ + z3++ khi đó z3++ = z3 = 15, result_3_2 = 10 - 10 + 15 = 15 sau đó x3 = 11, y3 = 11, tăng z3 = 16;
 * +Lần 4: cộng ++y3 ta có ++x3 - x3++ + z3++ + ++y3 khi đó ++y3 = y3 + 1 = 12, result_3_2 = 10 - 10 + 15 + 12 = 27 sau đó x3 = 11, tăng y3 = 12, z3 = 16;
 * +Lần 5: trừ y3-- ta có ++x3 - x3++ + z3++ + ++y3 - y3-- khi đó y3-- = y3 = 12, result_3_2 =  10 - 10 + 15 + 12 - 12= 15 sau đó x3 = 11, giảm y3 = 11, z3 = 16;
 */

/**
 * Bài 4:
 */
let bai4_1 = 10; //Number
let bai4_2 = true ; //Boolean
let bai4_3 = "i'm nguyên thành thiện" // string
let bai4_4 = null ; //Null 
let bai4_5 ; //undefined

/**
 * Bài 5:
 */
let arr5 =[1,2,3,4,5,6,7,8,9,10];

// bài 5.1:
let result_arr5_1 = arr5[0] + arr5[1];

// bài 5.2:
let result_arr5_2 = arr5[0] * arr5[ arr5.length -1 ];


/**
 * Bài 6
 */
let obj6 = {
    firstName : 'thành',
    lastName : 'trí',
    age : 16,
    favorite : 'chó',
}

// bài 6.1:
obj6.firstName = 'nguyễn';
obj6.lastName = 'thiện';

// bài 6.2
let nameobj6 = obj6.firstName + ' ' + obj6.lastName;
console.log(nameobj6);