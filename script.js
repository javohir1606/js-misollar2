// try {
//   // Foydalanuvchidan son kiritishni so'raymiz
//   let number = prompt("Son kiriting:");

//   // Sonni ikkiga bo'lamiz
//   let result = number / 2;

//   // Agar foydalanuvchi son emas, balki matn kiritsa, xatolik yuzaga keladi
//   if (isNaN(result)) {
//       throw new Error("Iltimos, faqat son kiriting!");
//   }

//   // Natijani chiqaramiz
//   console.log("Natija: " + result);
// } catch (error) {
//   // Xatolik yuz berganda, foydalanuvchiga xabar beramiz
//   console.log("Xato: " + error.message);
// }

// try {
//   // Faylni ochishga harakat qilamiz
//   let file = "faylni_ochish_funksiyasi()"; // Bu yerda haqiqiy fayl ochish funksiyasi bo'lishi kerak
//   console.log("Fayl ochildi: " + file);

//   // Fayl bilan ishlash (fayldan o'qish yoki yozish) 
//   // Misol uchun, fayldan o'qish
//   let data = "fayldan_oqish_funksiyasi()"; // Bu yerda haqiqiy o'qish funksiyasi bo'lishi kerak
//   console.log("Fayldan o'qilgan ma'lumot: " + data);

//   // Xato yuzaga kelishi mumkin bo'lgan joy
//   if (!file) {
//       throw new Error("Faylni ochishda xato!");
//   }
// } catch (error) {
//   // Agar xatolik yuz bersa, foydalanuvchiga xabar beramiz
//   console.log("Xato: " + error.message);
// } finally {
//   // Faylni yopishga harakat qilamiz
//   console.log("Fayl yopildi.");
// }


// function positiveSquareRoot(number) {
//   if (number < 0) {
//       throw new Error("Musbat son kiriting! Manfiy sonlarning kvadrat ildizi mavjud emas.");
//   }
//   return Math.sqrt(number);
// }

// try {
//   // Foydalanuvchidan son kiritishni so'raymiz
//   let userInput = prompt("Son kiriting:");
//   let number = parseFloat(userInput);

//   // Sonning kvadrat ildizini hisoblaymiz
//   let result = positiveSquareRoot(number);

//   // Natijani chiqaramiz
//   console.log("Natija: " + result);
// } catch (error) {
//   // Xatolik yuz berganda, foydalanuvchiga xabar beramiz
//   console.log("Xato: " + error.message);
// }


// uygi-vazifa
// 1-misol
// import { arr } from "./data.js";
// import { Person } from "./constructors.js";
// import { juftSon } from "./functions.js";

// console.log(arr);

// 2-misol
// import { str } from "./data.js";
// import { x } from "./data.js";
// console.log(x(str));


// 3-misol
// import { str } from "./data.js";

// 4-misol
// import { arr } from "./data.js"
// console.log(arr);

// 5-misol
// import { arr } from "./data.js"
// console.log(arr);

// 6-misol
// import { count } from "./data.js"
// console.log(count);

// 7-misol
// import { arr } from "./data.js"
// console.log(arr);

