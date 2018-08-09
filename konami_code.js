// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code = [9,9,9,1];

// function init() {
// let index = 0;
 
//   document.body.addEventListener('keydown', function(e) {
//     const key = parseInt(e.which || e.detail);
 
//   if (key === alphabet[index]) {
//     index++;
 
//     if (index === alphabet.length) {
//       alert("Hurray!");
 
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
//   });}
  
  
//   function init() {
//   let index = 0;

//   document.body.addEventListener('keydown', function(e) {
//     const key = parseInt(e.which || e.detail);

//     if (code[index] === key) {
//       index++;

//       if (index === code.length) {
//         alert('Hurray!');

//         index = 0;
//       }
//     } else {
//       index = 0;
//     }
//   });
// }

function init()
{
let i = 0;
document.body.addeventListener("keydown", function (key){
  
  if(key.which === code[i]){
    i++;
  
  console.log(i, "befoore 2nd if")
  if(i === code.length){
    alert("You did it")
    i = 0;
  }
else{i=0}
}  console.log(i,"after second if")
});}