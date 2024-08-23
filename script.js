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

// // mj.js - Main Script
// import { add, subtract, multiply, divide } from './mathFunctions.js';
// import { appName, version, author } from './config.js';
// import { User } from './User.js';

// console.log(`${appName} v${version} muallifi: ${author}`);

// // Math funksiyalaridan foydalanish
// let x = 10, y = 5;
// console.log(`Qo'shish: ${x} + ${y} = `, add(x, y));
// console.log(`Ayirish: ${x} - ${y} = `, subtract(x, y));
// console.log(`Ko'paytirish: ${x} * ${y} = `, multiply(x, y));
// console.log(`Bo'lish: ${x} / ${y} = `, divide(x, y));

// // User konstruktor funksiyasidan foydalanish
// let user1 = new User("John Doe", 30);
// console.log(user1.getInfo());



// function hasUniqueCharacters(s) {
//   // Set objectini yaratamiz va stringning har bir harfini unga qo'shamiz
//   const charSet = new Set();

//   for (let char of s) {
//       if (charSet.has(char)) {
//           return false; // Agar harf oldin uchragan bo'lsa, false qaytaramiz
//       }
//       charSet.add(char);
//   }

//   return true; // Agar harflar takrorlanmagan bo'lsa, true qaytaramiz
// }

// // Misollar:
// console.log(hasUniqueCharacters("abcdef"));  // True qaytaradi
// console.log(hasUniqueCharacters("hello"));   // False qaytaradi



// Funktsiyalarni eksport qilamiz
export function divide(a, b) {
  if (b === 0) {
      throw new Error("0 ga bo'lish mumkin emas!");
  }
  return a / b;
}

export function multiply(a, b) {
  return a * b;
}
