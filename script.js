/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById('kgInput').addEventListener('input',
function(e){
  let kgs = e.target.value;
  document.getElementById('btn1').addEventListener('click',function(){
  document.getElementById('lbsOutput').innerHTML= (kgs*2.20462).toFixed(2); //pounds
  document.getElementById('ozOutput').innerHTML = (kgs*35.274).toFixed(2); //Uncijos
  document.getElementById('gramsOutput').innerHTML= (kgs*1000).toFixed(0); //Gramai
  });
});
