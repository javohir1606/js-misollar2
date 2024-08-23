// Modullarni import qilamiz
import { divide, multiply } from './mathOperations.js';

try {
    let result1 = divide(10, 0);  // Bu yerda xato chiqadi
    console.log(result1);
} catch (error) {
    console.error("Xato ro'y berdi: " + error.message);
}

try {
    let result2 = multiply(10, 5);
    console.log(result2);  // 50 ni chop etadi
} catch (error) {
    console.error("Xato ro'y berdi: " + error.message);
}
