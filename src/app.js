// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function () {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };


// const pronoun = ['the', 'our'];
// const adj = ['great', 'big'];
// const noun = ['jogger', 'racoon'];

// for (let i = 0; i < pronoun.length; i++){
//   for (let j = 0; j < adj.length; j++){
//     for (let k = 0; k < noun.length; k++){
//       const address = pronoun[i]+adj[j]+noun[k]+'.com';
//       console.log(address);
//     }
//   }
// }
//lo mejor de dos mundos! no la manera ideal pero imprimia haha.
// const address = [];
// let pronoun = ['the', 'our'];
// let adj = ['great', 'big'];
// let noun = ['jogger', 'racoon'];

// pronoun.map(primero => {
//   adj.map(segundo => {
//     noun.map(tercero => {
//       address.push(primero + segundo + tercero + ".com")
      
//     })
//   })
// })
// console.log(address);

// for (let i = 0; i < address.length; i++){
//   console.log(address[i])
// }




//mejor estructurado y ideal! 


const address = [];
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];



for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      address.push(`${p}${a}${n}.com`);
    }
  }
}
console.log (address);






