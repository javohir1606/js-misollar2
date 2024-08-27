// export const juftSon = () => {};

///
// export let totalAge = arr.reduce((a, item) => {
//   return a + item.age;
// }, 0);
///
// export const x = (users) => {
//   let sum = 0;

//   for (let i of users){
//     sum += i.sum
//     i.sum = 0
//   }

//   for (let i = 0; i < users.length; i++){
//     if(users[i].id == 1){
//       users[i].sum = sum;
//     }
//   }
// }
// x(arr);

///
export const x = (numbers) => {
  let obj = {};

  for(let i of numbers){
   obj[i] = i;
  }
  return Object.values(obj);
}