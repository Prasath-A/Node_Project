
fetch("/database/6492e5a6cb16c746e768fcd2")
.then((res)=>res.json())
.then((msg)=>{
  console.log(msg.answer);
  console.log(msg.question);
  document.getElementById("disp").innerHTML=msg.question;
  document.getElementById("disp1").innerHTML=msg.answer;
})
