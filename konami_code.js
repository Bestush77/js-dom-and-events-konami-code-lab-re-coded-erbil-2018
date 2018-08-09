// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code = [9,9,9,1];


function init()
{
let i = 0;

document.body.addeventListener("keydown", function (keypressed){
  const key = parseInt(keypressed.detail || keypressed.which)
  if(key === code[i]){
    i++;
  
  console.log(i, "befoore 2nd if")
  if(i === code.length){
    alert("You did it")
    i = 0;
  }
else{
  i=0
  
}
}  console.log(i,"after second if")
});}